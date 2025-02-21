import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./components/Layout/Layout.jsx";
// import {  } from "../pages/Inicio/inicio.jsx";
//import { Nosotros } from "../pages/Nosotros/nosotros.jsx";
//import { Contacto } from "../pages/Contacto.contacto.jsx";
import { Router } from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
