import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContenidoEstatico } from "../pages/ContenidoEstatico/ContenidoEstatico.jsx";
import { DatosAPI } from "../pages/DatosAPI/DatosAPI.jsx";
import { Contacto } from "../pages/Contacto/contacto.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Para cada ruta defino el path y la vista */}
        <Route path="/ContenidoEstatico" element={<ContenidoEstatico />} />
        <Route path="/DatosAPI" element={<DatosAPI />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
