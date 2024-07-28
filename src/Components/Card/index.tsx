import { Link } from "react-router-dom"; // Link bileşenini react-router-dom'dan import ediyoruz
import { Shoe } from "../../types"; // Shoe tipini import ediyoruz
import Badge from "./Badge"; // Badge bileşenini import ediyoruz, indirim rozetini göstermek için kullanılıyor
import calcDiscount from "../../utils/calcDiscount"; // İndirimli fiyat hesaplama fonksiyonunu import ediyoruz

type Props = {
  item: Shoe; // Props türünü tanımlıyoruz, burada item bir Shoe türünde olacak
};

const Card = ({ item }: Props) => {
  // İndirimli fiyatı hesaplıyoruz
  const price = calcDiscount(item.price, item.discount);

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px]">
          <div className="relative rounded-[12px] lg:rounded-[24px]">
            <Badge discount={item.discount} />
            {/* İndirim rozetini gösteriyoruz */}
            <img src="/shoe.png" /> {/* Ürün resmi */}
          </div>
        </div>

        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name} {/* Ürün adı */}
        </h2>
      </div>

      <Link
        to={`/detail/${item.id}`} // Ürün detay sayfasına yönlendirme
        className="bg-dark text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black "
      >
        Ürünü Görüntüle -{" "}
        <span className={item.discount ? "text-orange-400" : "text-white"}>
          ${price} {/* İndirimli veya normal fiyat */}
        </span>
      </Link>
    </div>
  );
};

export default Card; // Card bileşenini dışa aktarıyoruz
