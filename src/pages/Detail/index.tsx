import { useQuery } from "@tanstack/react-query";
import { Route, Routes, useParams, Link } from "react-router-dom"; // `Link` import edildi
import api from "../../utils/api";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error/index";
import { Shoe } from "../../types";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import { FaArrowCircleLeft } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe", id], // `id` eklendi
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data),
  });

  return (
    <div className="mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        data && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 h-fit grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
              {data?.picture.map((url, i) => (
                <img key={i} src={url} />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />
              <Color data={data.color} />
              <Size data={data.size} />

              <div>
                <h2 className="font-semibold capitalize mb-5">
                  Bu ürün hakkında
                </h2>
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          </section>
        )
      )}
      <Link
        to="/"
        className="font-semibold mt-[100px] w-80 h-20 border p-2 rounded-lg hover:bg-yellow hover:text-white transition flex items-center justify-center gap-2"
      >
        <FaArrowCircleLeft />
        Anasayfaya Geri Dön
      </Link>
    </div>
  );
};

export default Detail;
