import { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./ContenidoEstatico.css";

const ContenidoEstatico = () => {
  return (
    <>
      <Layout>
        <div className="fondo">
          <h1>Bienvenidos a mi página de "Contenido Estático"</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            tenetur perspiciatis aliquid inventore, officiis numquam veritatis
            sint maiores a, sunt aspernatur vel iste adipisci reprehenderit quia
            quae?
          </p>
        </div>
      </Layout>
    </>
  );
};

export { ContenidoEstatico };
