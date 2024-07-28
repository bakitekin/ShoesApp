import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
};

const Fiyat = ({ price, setPrice }: Props) => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (price) {
      params.set("Fiyat", price);
      setParams(params);
    } else {
      params.delete("Fiyat");
      setParams(params);
    }
  }, [price, params, setParams]);

  return null;
};

const Price = () => {
  const [price, setPrice] = useState<string>("0");

  return (
    <div className="">
      <h2 className="font-semibold mb-[16px]">Fiyat</h2>
      <input
        type="range"
        className="w-full cursor-pointer"
        min={0}
        max={1000}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className="text-xs flex justify-between">
        <span>${price} </span>
        <span>$1000</span>
      </div>
      <Fiyat price={price} setPrice={setPrice} />
    </div>
  );
};

export default Price;
