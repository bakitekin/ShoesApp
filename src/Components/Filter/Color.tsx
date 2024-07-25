import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../utils/constants";

// SelectedProps arayüzü, bileşenin alacağı propsları tanımlar
interface SelectedProps {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

const Color = ({ selected, setSelected }: SelectedProps) => {
  // useSearchParams kancası, URL arama parametrelerini yönetmek için kullanılır
  const [params, setParams] = useSearchParams();

  // Renk seçimini değiştiren fonksiyon
  const toggle = (color: string) => {
    // Seçili rengi bul
    const found = selected.find((i) => i === color);
    if (found) {
      // Seçili renk varsa, listeden kaldır
      setSelected(selected.filter((i) => i !== color));
    } else {
      // Seçili renk yoksa, listeye ekle
      setSelected([...selected, color]);
    }
  };

  // selected değiştiğinde URL arama parametrelerini güncelleyen useEffect kancası
  useEffect(() => {
    if (selected.length > 0) {
      // Seçili renkler varsa, URL'yi güncelle
      params.set("color", selected.join(","));
      setParams(params);
    } else {
      // Seçili renkler yoksa, URL'den kaldır
      params.delete("color");
      setParams(params);
    }
  }, [selected]);

  return (
    <div className="">
      <h2 className="font-semibold mb-[16px]">Renk</h2>
      <div className="grid grid-cols-5 gap-[16px]">
        {colors.map((i) => {
          // Seçili rengi kontrol et
          const found = selected.find((item) => item === i.id);
          return (
            <p
              // Renk kutusunun arka plan rengini ayarla
              style={{ background: i.code }}
              key={i.id}
              onClick={() => toggle(i.id)}
              className={`py-[8px] px-[8px] text-center rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
