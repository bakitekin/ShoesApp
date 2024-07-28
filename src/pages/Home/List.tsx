import { useQuery } from "@tanstack/react-query"; // react-query kütüphanesinden useQuery fonksiyonunu import ediyoruz
import api from "../../utils/api"; // api çağrıları için kendi yazdığımız api modülünü import ediyoruz
import { Shoe } from "../../types"; // Shoe tipini import ediyoruz
import Loader from "../../Components/Loader"; // Loader bileşenini import ediyoruz
import Error from "../../Components/Error"; // Error bileşenini import ediyoruz
import Card from "../../Components/Card"; // Card bileşenini import ediyoruz
import { useSearchParams } from "react-router-dom"; // URL'deki arama parametrelerini almak için useSearchParams hook'unu import ediyoruz
import formatParams from "../../utils/formatParams"; // URL parametrelerini formatlamak için kendi yazdığımız formatParams fonksiyonunu import ediyoruz

const List = () => {
  const [params] = useSearchParams(); // URL'deki arama parametrelerini almak için useSearchParams hook'unu kullanıyoruz
  const paramsObj = Object.fromEntries(params.entries()); // Arama parametrelerini bir nesneye dönüştürüyoruz

  const paramStr = formatParams(paramsObj) || ""; // parametre nesnesini formatlıyoruz ve string olarak alıyoruz, eğer boşsa boş string döndürüyoruz

  // useQuery hook'unu kullanarak veri çekiyoruz
  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramStr], // queryKey, react-query'nin cache ve fetch işlemlerini yönetmesi için kullanılır
    queryFn: () =>
      api
        .get(paramStr ? `/shoes?${paramStr}` : "/shoes") // paramStr varsa bunu URL'e ekleyerek api çağrısı yapıyoruz
        .then((res) => res.data), // response'dan gelen veriyi data olarak alıyoruz
  });

  return (
    <div className="col-span-4 lg:col-span-3">
      {isLoading ? ( // Yüklenme durumunu kontrol ediyoruz
        <Loader /> // Yükleniyorsa Loader bileşenini gösteriyoruz
      ) : error ? ( // Hata durumunu kontrol ediyoruz
        <Error message={(error as Error).message} /> // Hata varsa Error bileşenini gösteriyoruz
      ) : data ? ( // Veri durumunu kontrol ediyoruz
        data.length === 0 ? ( // Veri var ama uzunluğu 0 ise
          <p>
            Aradığınız kriterlere uygun ürün bulunamadı. <br /> Lütfen farklı
            filtrelemeler deneyin veya daha sonra tekrar deneyiniz.
          </p>
        ) : (
          // Veri var ve uzunluğu 0 değilse
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
            {data.map(
              (
                item // Veriyi Card bileşenine map'leyerek gösteriyoruz
              ) => (
                <Card key={item.id} item={item} />
              )
            )}
          </div>
        )
      ) : (
        <p className="text-center">Aranılan kriterlere uygun ürün bulunamadı</p> // Veri yoksa uygun bir mesaj gösteriyoruz
      )}
    </div>
  );
};

export default List;
