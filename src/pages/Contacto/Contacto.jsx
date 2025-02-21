import { Layout } from "../../components/Layout/Layout.jsx";
import "./Contacto.css";

const Contacto = () => {
  return (
    <Layout>
      <form className="contacto-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo electrónico"
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {/* <h2>Hola desde la página interna del sitio "contacto"</h2> */}
    </Layout>
  );
};

export { Contacto };
