import { useState } from "react";
import Hero from "./Hero";
import Buttons from "./Buttons";
import List from "./List";
import Filter from "../../Components/Filter";

const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div>
      <Hero />
      <Buttons />
      <h1 className="text-[20px] md:text-[36px] font-semibold my-[32px]">
        Sana Uygun Seçenekler
      </h1>
      <button onClick={toggleFilters} className="bg-blue-500 text-black  mb-4">
        {isFiltersOpen ? "Hide Filters" : "Show Filters"}
      </button>
      <div className="grid grid-cols-4 gap-5">
        {isFiltersOpen && <Filter />}
        <List />
      </div>
    </div>
  );
};

export default Home;
