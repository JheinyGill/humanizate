import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter } from "react-router-dom";
import React from "react";
import Rutas from "./Components/Rutas";

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById("root")
);
