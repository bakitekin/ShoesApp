// Props tipini tanımlar, open fonksiyonunu alır
type Props = {
  open: () => void;
};

const Buttons = ({ open }: Props) => {
  return (
    <div className="mt-5 flex gap-10 lg:hidden">
      {/* Filtreler butonu */}
      <button
        onClick={open}
        className="bg-white rounded-md p-1 px-4 flex-1 flex gap-4 items-center justify-between"
      >
        {/* Buton metni */}
        Filtreler
        {/* Buton ikonu */}
        <img src="/public/list.svg" alt="Filtreler İkonu" />
      </button>
      {/* Sırala butonu */}
      <button className="bg-white rounded-md p-1 px-4 flex-1 flex gap-4 items-center justify-between">
        {/* Buton metni */}
        Sırala
        {/* Buton ikonu */}
        <img src="/public/list.svg" alt="Sırala İkonu" />
      </button>
    </div>
  );
};

export default Buttons;
