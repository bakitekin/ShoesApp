import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// SelectedProps arayüzü, bileşenin alacağı propsları tanımlar
interface SelectedProps {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

const Size = ({ selected, setSelected }: SelectedProps) => {
  // useSearchParams kancası, URL arama parametrelerini yönetmek için kullanılır
  const [params, setParams] = useSearchParams();

  // Mevcut ayakkabı numaralarının dizisi
  const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

  // Numara seçimini değiştiren fonksiyon
  const toggle = (num: string) => {
    // Seçili numarayı bul
    const found = selected.find((i) => i === num);
    if (found) {
      // Seçili numara varsa, listeden kaldır
      setSelected(selected.filter((i) => i !== num));
    } else {
      // Seçili numara yoksa, listeye ekle
      setSelected([...selected, num]);
    }
  };

  // selected değiştiğinde URL arama parametrelerini güncelleyen useEffect kancası
  useEffect(() => {
    if (selected.length > 0) {
      // Seçili numaralar varsa, URL'yi güncelle
      params.set("size", selected.join(","));
      setParams(params);
    } else {
      // Seçili numaralar yoksa, URL'den kaldır
      params.delete("size");
      setParams(params);
    }
  }, [selected]);

  return (
    <div className="lg:mt-[20px]">
      <h2 className="font-semibold mb-[16px]">Numara</h2>

      <div className="grid grid-cols-5 gap-[16px]">
        {numbers.map((num) => {
          // Seçili numarayı kontrol et
          const found = selected.find((i) => i === num);

          return (
            <p
              key={num}
              onClick={() => toggle(num)}
              className={`py-[8px] px-[16px] lg:px-[0px] text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-black text-white" : "bg-white text-dark"
              }`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
