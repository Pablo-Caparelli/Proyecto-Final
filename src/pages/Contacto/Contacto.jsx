import { Layout } from "../../components/Layout/Layout.jsx";
import Swal from "sweetalert2";
import "./Contacto.css";

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "¡Mensaje enviado correctamente!",
      text: "Gracias por contactarnos, te responderemos a la brevedad",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    event.target.reset(); // Limpia el formulario después de enviarlo
  };

  return (
    <Layout>
      <h2>Contáctame</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          autoComplete="off"
          placeholder="Ingrese su nombre"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Ingrese su correo electrónico"
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          autoComplete="off"
          placeholder="Escriba su mensaje por favor"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
};

export { Contacto };
