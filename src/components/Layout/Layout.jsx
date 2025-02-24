import { Link } from "react-router-dom";
import "./Layout.css";

//nombre
const Layout = (props) => {
  return (
    <>
      <header>
        <img src="../../public/logo.png" alt="imagen de logo" />
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
      <footer class="bg-info text-center text-white p-5">
        <div class="nav-link text-white">
          <h5>Copyright &copy; 2024. Sitio creado por Pablo Caparelli.</h5>
          <p>Todos los derechos reservados.</p>
          <div class="social">
            <a
              href="https://www.facebook.com/profile.php?id=100010941435312&locale=es_LA"
              class="btn"
            >
              <i class="fab fa-facebook fa-1x" alt="icono de facebook"></i>
            </a>
            <a href="https://www.instagram.com/pablo_caparelli/" class="btn">
              <i class="fab fa-instagram fa-1x" alt="icono de instagram"></i>
            </a>
            <a href="https://wa.me/+1154025454" class="btn" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#navbar" class="btn" target="_blank">
              <i class="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Layout };
