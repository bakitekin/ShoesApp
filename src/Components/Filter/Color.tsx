import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";

function Color() {
  const Color = ({ selected, setSelected }: SelectedProps) => {
    const [params, setParams] = useSearchParams();
  };

  return (
    <div className="">
      <h2>Renk</h2>
      <div className="">...</div>
    </div>
  );
}

export default Color;
