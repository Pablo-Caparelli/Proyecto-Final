import { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";

import "./ContenidoEstatico.css";

const ContenidoEstatico = () => {
  return (
    <>
      <Layout>
        <div className="fondo">
          <h1 className="titulo">
            Bienvenidos a mi página de "Contenido Estático"
          </h1>
          <p className="subtitulo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            tenetur perspiciatis aliquid inventore, officiis numquam veritatis
            sint maiores a, sunt aspernatur vel iste adipisci reprehenderit quia
            quae?
          </p>
        </div>
        <div className="fondo2">
          <div className="cart">
            <img
              alt=""
              className="card-img-top"
              src="../public/imagen1-carrousel.jpg"
            />
            <h5 className="card-title">Explorador Urbano</h5>
            <p className="card-text">
              Con su estilo futurista y su actitud segura, este aventurero de
              otra especie camina por la ciudad con determinación.
            </p>
          </div>
          <div className="cart">
            <img
              alt="..."
              className="card-img-top"
              src="../public/imagen2-carrousel.jpg"
            />
            <h5 className="card-title">Viajero del Futuro</h5>
            <p className="card-text">
              Con su pelaje anaranjado y su atuendo tecnológico, este explorador
              combina lo salvaje con lo futurista.
            </p>
          </div>
          <div className="cart">
            <img
              alt="..."
              className="card-img-top"
              src="../public/imagen3-carrousel.jpg"
            />
            <h5 className="card-title">Energía Dorada</h5>
            <p className="card-text">
              Con un resplandor vibrante y una esencia electrizante, esta
              criatura parece estar formada de pura energía líquida.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { ContenidoEstatico };
