import { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyUser,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title:
        "¡Mensaje enviado correctamente! Gracias por contactarnos, te responderemos a la brevedad",
      html: `<p><strong>Nombre:</strong> ${formData.nombre}</p>
             <p><strong>Email:</strong> ${formData.email}</p>
             <p><strong>Mensaje:</strong> ${formData.mensaje}</p>`,
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "custom-button",
      },
    });

    // Limpia el formulario restableciendo el estado
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Layout>
      <h2>Contáctanos</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          autoComplete="off"
          placeholder="Ingrese su nombre"
          value={formData.nombre} // Enlaza con el estado
          onChange={handleChange} // Maneja cambios en el input
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Ingrese su correo electrónico"
          value={formData.email} // Enlaza con el estado
          onChange={handleChange} // Maneja cambios en el input
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          autoComplete="off"
          placeholder="Escriba su mensaje por favor"
          value={formData.mensaje} // Enlaza con el estado
          onChange={handleChange} // Maneja cambios en el textarea
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <section id="contact-info" className="bg-dark">
        <h4>El Club de los Pokemones</h4>
        <div className="container">
          <div className="box">
            <FontAwesomeIcon icon={faHouseChimneyUser} size="3x" />
            <h3>Ubicación</h3>
            <p>Ciudad de la Paz 2030, Belgrano, CABA</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faPhone} size="3x" />
            <h3>Teléfono</h3>
            <p>Cel.:(5411)3228-5367</p>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            <h3>Email</h3>
            <p>elclubdelospokemones@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { Contacto };
