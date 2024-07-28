import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// SelectedProps arayüzü, bileşenin alacağı propsları tanımlar
interface SelectedProps {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

const Gender = ({ selected, setSelected }: SelectedProps) => {
  // useSearchParams kancası, URL arama parametrelerini yönetmek için kullanılır
  const [params, setParams] = useSearchParams();

  // Cinsiyet seçimini değiştiren fonksiyon
  const toggle = (gender: string) => {
    // Seçili cinsiyeti bul
    const found = selected.find((i) => i === gender);
    if (found) {
      // Seçili cinsiyet varsa, listeden kaldır
      setSelected(selected.filter((i) => i !== gender));
    } else {
      // Seçili cinsiyet yoksa, listeye ekle
      setSelected([...selected, gender]);
    }
  };

  // selected değiştiğinde URL arama parametrelerini güncelleyen useEffect kancası
  useEffect(() => {
    if (selected.length > 0) {
      // Seçili cinsiyetler varsa, URL'yi güncelle
      params.set("gender", selected.join(","));
      setParams(params);
    } else {
      // Seçili cinsiyetler yoksa, URL'den kaldır
      params.delete("gender");
      setParams(params);
    }
  }, [selected]);

  // Bileşenin JSX yapısını döndürür
  return (
    <div>
      <h2 className="font-semibold mb-[16px] ">Cinsiyet</h2>
      <div className="flex items-center gap-4">
        <input
          // Kadın cinsiyetini kontrol eder, seçili olup olmadığını belirler
          checked={selected.includes("women")}
          // Kadın seçimi değiştiğinde toggle fonksiyonunu çağırır
          onChange={() => toggle("women")}
          id="women"
          type="checkbox"
        />
        <label htmlFor="women" className="font-semibold select-none cursor-pointer">
          Kadın
        </label>
      </div>
      <div className="flex items-center gap-4">
        <input
          // Erkek cinsiyetini kontrol eder, seçili olup olmadığını belirler
          checked={selected.includes("men")}
          // Erkek seçimi değiştiğinde toggle fonksiyonunu çağırır
          onChange={() => toggle("men")}
          id="men"
          type="checkbox"
        />
        <label htmlFor="men" className="font-semibold select-none cursor-pointer">
          Erkek
        </label>
      </div>
    </div>
  );
};

export default Gender;
