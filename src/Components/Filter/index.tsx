import { useSearchParams } from "react-router-dom"; // URL'deki arama parametrelerini almak ve ayarlamak için useSearchParams hook'unu import ediyoruz
import Color from "./Color"; // Color bileşenini import ediyoruz
import Gender from "./Gender"; // Gender bileşenini import ediyoruz
import Price from "./Price"; // Price bileşenini import ediyoruz
import Size from "./Size"; // Size bileşenini import ediyoruz
import { useState } from "react"; // useState hook'unu import ediyoruz

type Props = {
  isOpen: boolean; // Bileşenin açık olup olmadığını belirten boolean
  close: () => void; // Bileşeni kapatma fonksiyonu
};

const Filter = ({ isOpen, close }: Props) => {
  const [params, setParams] = useSearchParams(); // URL arama parametrelerini almak ve ayarlamak için kullanılır

  // URL parametrelerinden filtre değerlerini alıyoruz ve state'e aktarıyoruz
  const [size, setSize] = useState<string[]>(
    params.get("size")?.split(",") || []
  );
  const [color, setColor] = useState<string[]>(
    params.get("color")?.split(",") || []
  );
  const [gender, setGender] = useState<string[]>(
    params.get("gender")?.split(",") || []
  );
  const [value, setValue] = useState<string>(params.get("price") || "0");

  // Filtreleri sıfırlayan fonksiyon
  const handleReset = () => {
    setParams({}); // URL parametrelerini sıfırlar
    setSize([]); // Size state'ini boş bir dizi yapar
    setColor([]); // Color state'ini boş bir dizi yapar
    setGender([]); // Gender state'ini boş bir dizi yapar
    setValue("0"); // Price state'ini "0" yapar
  };

  return (
    <div
      className={`${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 max-lg:grid max-lg:place-items-center max-lg:bg-zinc-900 max-lg:bg-opacity-60 z-10"
          : "max-lg:hidden"
      } col-span-1`}
    >
      <div className="max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh]">
        <h2 className="text-xl font-semibold max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          Filtreler
          <button className="lg:hidden" onClick={close}>
            {" "}
            {/* Bileşeni kapatma butonu */}
            <span className="text-red font-semibold">X</span>
          </button>
        </h2>

        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-[24px] rounded-b-md">
          <Size selected={size} setSelected={setSize} /> {/* Size bileşeni */}
          <Color selected={color} setSelected={setColor} />{" "}
          {/* Color bileşeni */}
          <Gender selected={gender} setSelected={setGender} />{" "}
          {/* Gender bileşeni */}
          <Price value={value} setValue={setValue} /> {/* Price bileşeni */}
          <button className="border p-2 rounded-lg hover:bg-blue outline-transparent hover:text-white transition">
            Filtrele {/* Filtreleme butonu */}
          </button>
          <button
            className="border p-2 rounded-lg hover:bg-red hover:text-white transition"
            type="reset"
            onClick={handleReset} // Filtreleri sıfırlayan fonksiyon
          >
            Sıfırla {/* Sıfırlama butonu */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter; // Filter bileşenini dışa aktarıyoruz
