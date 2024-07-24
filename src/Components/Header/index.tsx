import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-fa_white flex justify-between max-w-[1320px] p-[32px] rounded-[12px] md:rounded-[24px] items-center ">
      <div className="max-md:hidden text-dark font-semibold flex gap-[40px] items-center">
        <Link to="/">Yeni ürünler 🔥</Link>
        <Link to="/">Kadın </Link>
        <Link to="/">Erkek </Link>
      </div>
      <button className="md:hidden">
        <img className="w-7" src="/public/bar.svg" />
      </button>
      <Link to={"/"}>
        <img src="/public/header-logo.svg" />
      </Link>
      <div className="flex items-center gap-[9px] md:gap-[40px]">
        <button className="max-md:hidden">
          <img src="/public/Search.svg" />
        </button>
        <button>
          <img src="/public/User.svg" />
        </button>
        <button className="w-[25px] h-[25px] bg-yellow rounded-full font-semibold grid place-items-center ">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
