import { colors } from "../../utils/constants"; // colors dizisini import ediyoruz

// Color bileşeni, props olarak data adında bir string alır
const Color = ({ data }: { data: string }) => {
  // data stringini virgülle ayrılmış değerlere böler ve bir diziye dönüştürürüz
  const arr = data.split(",");

  return (
    <div>
      <h2 className="mb-3 font-semibold">Renkler</h2> {/* Başlık */}
      <div className="flex gap-4">
        {arr.map((item) => {
          // id'si verilen elemanın renk koduna erişmek için colors dizisinde elemanı arıyoruz
          const color = colors.find((i) => i.id === item);
          return (
            <div
              key={item} // her elemanın key prop'u olmalı, burada item değerini kullanıyoruz
              style={{ background: color?.code || "gray" }} // elemanın arka plan rengini belirliyoruz
              className="h-8 w-8 rounded-full cursor-pointer" // stil sınıfları
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Color; // Color bileşenini dışa aktarıyoruz
