const Error = ({ message }: { message: string }) => {
  return (
    <div className="bg-red p-4 text-white rounded-lg text-center">
      <div className="mb-4 capitalize ">Üzgünüz bir hata meydana geldi</div>
      <p>{message}</p>
    </div>
  );
};

export default Error;