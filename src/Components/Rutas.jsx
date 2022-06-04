import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Registro from "../Components/Register";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
