import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="font-semibold text-2xl mt-[145px] w-80 h-20 border p-2 rounded-lg hover:bg-yellow hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
    >
      <FaArrowCircleLeft />
      Geri Dön
    </div>
  );
};

export default GoBackButton;
