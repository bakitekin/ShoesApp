const Hero = () => {
  return (
    <div className="relative mt-[24px] md:mt-[80px]">
      <div className="absolute top-1/2 transform -translate-y-1/2 text-white pl-[40px]">
        <p className="text-[12px] md:text-[24px] capitalize">
          Sınırlı Bir Süre İçin
        </p>
        <h1 className="text-[20px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-semibold">
          Şimdi <span className="text-yellow capitalize">%30</span> İndirim
        </h1>
        <p className="text-[10px] md:text-[20px] text-gray-500 capitalize">
          Konforunuz düşünülerek tasarlanmış spor ayakkabılar, böylece bir
          sonraki antrenmanınıza tüm dikkatinizi verebilirsiniz.
        </p>
      </div>
      <img src="/bg.svg" alt="Background" />
    </div>
  );
};

export default Hero;
