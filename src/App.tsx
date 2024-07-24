import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray md:px-[60px] py-[32px] px-[16px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
