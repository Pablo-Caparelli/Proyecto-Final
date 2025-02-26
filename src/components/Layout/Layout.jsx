import { Link } from "react-router-dom";
import "./Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

//nombre
const Layout = (props) => {
  return (
    <>
      <header>
        <img src="../../public/Pikachu.jpg" alt="imagen de Pikachu" />
        <nav>
          <ul>
            <li>
              <Link to="/">Contenido Estático</Link>
            </li>
            <li>
              <Link to="/DatosAPI">Datos API</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {props.nombre && <h1>Hola {props.nombre}</h1>}
        {props.children}
      </main>
      <footer className="bg-info text-center text-white p-5">
        <div className="nav-link text-white">
          <h5>Copyright &copy; 2024. Sitio creado por Pablo Caparelli.</h5>
          <p>Todos los derechos reservados.</p>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100010941435312&locale=es_LA"
              className="btn"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              href="https://www.instagram.com/pablo_caparelli/"
              className="btn"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href="https://wa.me/1154025454"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };
