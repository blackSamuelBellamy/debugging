import { NavLink } from "react-router-dom";
import "./styles/navegacion.css";

const changing = ({ isActive }) => (isActive ? "isActive" : "mainNavBar");

const Navegacion = () => {
  return (
    <div className="mainNavBarContainer">
      <NavLink to="/crearperfil" className={changing}>
        Crear Perfil
      </NavLink>
      <NavLink to="/missolicitudes" className={changing}>
        Mis Solicitudes
      </NavLink>

      <NavLink to="/perfilfreecoder" className={changing}>
        Perfil
      </NavLink>
      <NavLink to="/busqueda" className={changing}>
        Búsqueda
      </NavLink>
      <NavLink to="/contactarfreecoder" className={changing}>
        Contactar
      </NavLink>
      <NavLink to="/confirmarorden" className={changing}>
        Orden en proceso
      </NavLink>
    
      <NavLink to="/seguimiento" className={changing}>
        Seguimiento
      </NavLink>
      <NavLink to="/crearpropuesta" className={changing}>
        Crear propuesta
      </NavLink>
      <NavLink to="/enviopropuesta" className={changing}>
        Envio propuesta
      </NavLink>
      <NavLink to="/abonarpropuesta" className={changing}>
        Abonar Propuesta
      </NavLink>
      <NavLink to="/home" className={changing}>
        Home
      </NavLink>
      <NavLink to="/login" className={changing}>
        Login
      </NavLink>
    </div>
  );
};  

export default Navegacion;
