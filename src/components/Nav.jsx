import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import mainLogo from "../assets/img/mainLogo.png";
import "./styles/navBar.css";
import "./styles/dropdown.css";

const Nav = () => {
  const { hamburgerDisplay, setHamburgerDisplay } = useContext(DataContext);
  const hamburgerHandle = () => setHamburgerDisplay(!hamburgerDisplay);

  return (
    <header className="navBarHeader">
      <button
        onClick={hamburgerHandle}
        className={hamburgerDisplay ? "hamburger cruz" : "hamburger"}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <NavLink to="/home" className="navBarHeaderLogo">
        <img src={mainLogo} alt="logoFreecoders" />
      </NavLink>
      <nav className={hamburgerDisplay ? "displayed" : "nav"}>
        <ul>
          <NavLink
            to="/login"
            className={hamburgerDisplay ? "liDisplayed" : "li"}
          >
            Ingresar
          </NavLink>
          <NavLink
            to="/crearperfil"
            className={hamburgerDisplay ? "liDisplayed" : "li"}
          >
            Crear Perfil
          </NavLink>
          <NavLink
            to="/busqueda"
            className={hamburgerDisplay ? "liDisplayed" : "li"}
          >
            Buscar Coders
          </NavLink>
          <NavLink
            to="/contactarfreecoder"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Contactar Freecoder
          </NavLink>
          <NavLink
            to="/missolicitudes"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Mis solicitudes
          </NavLink>
          <NavLink
            to="/crearpropuesta"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Crear Propuesta
          </NavLink>

          <NavLink
            to="/confirmarorden"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Orden en proceso
          </NavLink>

          <NavLink
            to="/seguimiento"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Seguimiento
          </NavLink>

          <NavLink
            to="/enviopropuesta"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Enviar Propuesta
          </NavLink>

          <NavLink
            to="/abonarpropuesta"
            className={hamburgerDisplay ? "liDisplayed" : "li displaynone"}
          >
            Abonar Propuesta
          </NavLink>

          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <NavLink
                to="/contactarfreecoder"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Contactar Freecoder
              </NavLink>
              <NavLink
                to="/missolicitudes"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Mis solicitudes
              </NavLink>
              <NavLink
                to="/crearpropuesta"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Crear Propuesta
              </NavLink>

              <NavLink
                to="/confirmarorden"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Orden en proceso
              </NavLink>

              <NavLink
                to="/seguimiento"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Seguimiento
              </NavLink>

              <NavLink
                to="/enviopropuesta"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Enviar Propuesta
              </NavLink>
              <NavLink
                to="/abonarpropuesta"
                className={hamburgerDisplay ? "liDisplayed" : "li"}
              >
                Abonar Propuesta
              </NavLink>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
