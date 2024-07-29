import { useSearchParams } from "react-router-dom"; // URL'deki arama parametrelerini almak ve ayarlamak için useSearchParams hook'unu import ediyoruz
import Color from "./Color"; // Color bileşenini import ediyoruz
import Gender from "../../Components/Filter/Gender"; // Gender bileşenini import ediyoruz
import Price from "../../Components/Filter/Price"; // Price bileşenini import ediyoruz
import Size from "./Size"; // Size bileşenini import ediyoruz
import { useState } from "react"; // useState hook'unu import ediyoruz
import GoBackButton from "../../pages/Detail/GoBack";

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

  // Filtreleri uygulayan fonksiyon
  const handleOk = () => {
    const newParams: any = {};

    if (size.length > 0) {
      newParams.size = size.join(",");
    }
    if (color.length > 0) {
      newParams.color = color.join(",");
    }
    if (gender.length > 0) {
      newParams.gender = gender.join(",");
    }
    if (value !== "0") {
      newParams.price = value;
    }

    setParams(newParams);
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
            {/* Bileşeni kapatma butonu */}X
          </button>
        </h2>

        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-[24px] rounded-b-md">
          <Size selected={size} setSelected={setSize} /> {/* Size bileşeni */}
          <Color selected={color} setSelected={setColor} />{" "}
          {/* Color bileşeni */}
          <Gender selected={gender} setSelected={setGender} />{" "}
          {/* Gender bileşeni */}
          <Price value={value} setValue={setValue} /> {/* Price bileşeni */}
          <button
            type="button"
            onClick={handleOk}
            className="border p-2 rounded-lg hover:bg-yellow outline-transparent hover:text-black transition"
          >
            Uygula {/* Filtreleme butonu */}
          </button>
          <button
            type="reset"
            onClick={handleReset} // Filtreleri sıfırlayan fonksiyon
            className="border p-2 rounded-lg hover:bg-dark hover:text-white transition"
          >
            Sıfırla {/* Sıfırlama butonu */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
