import { useState } from "react";
import Hero from "./Hero";
import Buttons from "./Buttons";
import List from "./List";
import Filter from "../../Components/Filter";

const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div>
      <Hero />
      <Buttons open={() => setIsFiltersOpen(true)} />
      <h1 className="text-[20px] md:text-[36px] font-semibold my-[32px]">
        Sana Uygun Seçenekler
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isFiltersOpen} close={() => setIsFiltersOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Home;
