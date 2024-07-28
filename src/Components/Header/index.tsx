import { Link } from "react-router-dom"; // Sayfa yönlendirmeleri için Link bileşenini import ediyoruz

const Header = () => {
  return (
    <header className="bg-fa_white flex justify-between max-w-[1320px] p-[32px] rounded-[12px] md:rounded-[24px] items-center ">
      <div className="max-md:hidden text-dark font-semibold flex gap-[40px] items-center">
        {/* Küçük ekranlarda gizlenen bağlantılar */}
        <Link to="/">Yeni ürünler 🔥</Link>
        <Link to="/">Kadın</Link>
        <Link to="/">Erkek</Link>
      </div>
      <button className="md:hidden">
        {/* Küçük ekranlarda görünen menü butonu */}
        <img className="w-7" src="/public/bar.svg" alt="Menu" />
      </button>
      <Link to={"/"}>
        {/* Logo bağlantısı */}
        <img src="/public/header-logo.svg" alt="Logo" />
      </Link>
      <div className="flex items-center gap-[9px] md:gap-[40px]">
        <button className="max-md:hidden">
          {/* Küçük ekranlarda gizlenen arama butonu */}
          <img src="/public/Search.svg" alt="Search" />
        </button>
        <button>
          {/* Kullanıcı hesabı butonu */}
          <img src="/public/User.svg" alt="User" />
        </button>
        <button className="w-[25px] h-[25px] bg-yellow rounded-full font-semibold grid place-items-center ">
          {/* Sepet butonu, başlangıçta 0 öğe gösterir */}
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header; // Header bileşenini dışa aktarıyoruz
