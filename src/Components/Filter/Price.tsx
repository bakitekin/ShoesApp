import React, { useState, useEffect } from "react"; // React ve gerekli hook'ları import ediyoruz
import { useSearchParams } from "react-router-dom"; // URL'deki arama parametrelerini almak ve ayarlamak için useSearchParams hook'unu import ediyoruz

type PriceProps = {
  price: string; // price, string türünde bir prop
  setPrice: React.Dispatch<React.SetStateAction<string>>; // setPrice, string türünde state güncelleme fonksiyonu
};

const Fiyat = ({ price, setPrice }: PriceProps) => {
  const [params, setParams] = useSearchParams(); // URL arama parametrelerini almak ve ayarlamak için kullanılır

  useEffect(() => {
    if (price) {
      params.set("Fiyat", price); // Eğer price varsa, URL parametrelerine ekler
      setParams(params); // Parametreleri günceller
    } else {
      params.delete("Fiyat"); // Eğer price yoksa, URL parametrelerinden siler
      setParams(params); // Parametreleri günceller
    }
  }, [price, params, setParams]); // price, params ve setParams değiştiğinde effect çalışır

  return null; // Bu bileşen bir UI döndürmez
};

const Price = () => {
  const [price, setPrice] = useState<string>("0"); // Price state'ini tanımlıyoruz ve başlangıç değerini "0" yapıyoruz

  return (
    <div className="">
      <h2 className="font-semibold mb-[16px]">Fiyat</h2> {/* Fiyat başlığı */}
      <input
        type="range"
        className="w-full cursor-pointer"
        min={0}
        max={1000}
        value={price} // Range input'un değeri price state'ine bağlı
        onChange={(e) => setPrice(e.target.value)} // Input değiştiğinde price state'ini günceller
      />
      <div className="text-xs flex justify-between">
        <span>${price} </span> {/* Seçilen fiyat */}
        <span>$1000</span> {/* Maksimum fiyat */}
      </div>
      <Fiyat price={price} setPrice={setPrice} />{" "}
      {/* URL parametrelerini güncellemek için Fiyat bileşenini kullanıyoruz */}
    </div>
  );
};

export default Price; // Price bileşenini dışa aktarıyoruz
