import { useQuery } from "@tanstack/react-query"; // Veri alma işlemleri için React Query kullanılıyor
import { useParams } from "react-router-dom"; // URL parametrelerini almak için kullanılıyor
import api from "../../utils/api"; // API çağrıları için kullanılan yardımcı fonksiyon
import Loader from "../../Components/Loader"; // Yüklenme durumu için Loader bileşeni
import Error from "../../Components/Error/index"; // Hata durumu için Error bileşeni
import { Shoe } from "../../types"; // Shoe türü, veri tipini belirtmek için kullanılıyor
import Head from "./Head"; // Ürün başlığı ve fiyatı gibi bilgileri gösteren bileşen
import Color from "./Color"; // Ürün renk seçeneklerini gösteren bileşen
import Size from "./Size"; // Ürün boyut seçeneklerini gösteren bileşen
import GoBackButton from "./GoBack"; // Geri dönme butonunu gösteren bileşen

const Detail = () => {
  const { id } = useParams(); // URL'den id parametresini alır

  // useQuery hook'u ile API'den veri çekilir
  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe", id], // Sorgu anahtarı olarak id kullanılır
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data), // API çağrısı ile veriyi alır
  });

  return (
    <div className="mt-8">
      {isLoading ? ( // Yüklenme durumu
        <Loader />
      ) : error ? ( // Hata durumu
        <Error message={error.message} />
      ) : (
        data && ( // Başarılı veri alımı durumu
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 h-fit grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
              {/* İlk resmi göstermek için slice(0, 1) kullanıyoruz */}
              {data?.picture.slice().map((img, i) => (
                <img key={i} src={img} alt={`Shoe ${i}`} /> // Ürünün resimlerini gösterir
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />{" "}
              {/* Ürün başlığı ve fiyatı gibi bilgileri gösterir */}
              <Color data={data.color} />{" "}
              {/* Ürün renk seçeneklerini gösterir */}
              <Size data={data.size} />{" "}
              {/* Ürün boyut seçeneklerini gösterir */}
              <div>
                <h2 className="font-semibold capitalize mb-5">
                  Bu ürün hakkında
                </h2>
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
                {/* Ürün açıklamasını gösterir */}
                <GoBackButton /> {/* Geri dönme butonu */}
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Detail; // Detail bileşenini dışa aktarıyoruz
