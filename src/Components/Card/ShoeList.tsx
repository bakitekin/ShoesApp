import { useEffect, useState } from "react";
import axios from "../../utils/api"; // axios yapılandırmasını import edin
import Card from "./index"; // Card bileşenini import ediyoruz
import { Shoe } from "../../types"; // Shoe tipini import ediyoruz

const ShoeList = () => {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    axios
      .get("/shoes")
      .then((response) => setShoes(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <Card key={shoe.id} item={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
