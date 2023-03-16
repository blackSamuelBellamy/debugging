import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spline from "@splinetool/react-spline";
import { FaKey, FaUser, FaLock, FaQuestionCircle } from "react-icons/fa";
import { HiUserPlus } from "react-icons/hi2";
import { DataContext } from "../hooks/DataContext";
import "../components/styles/form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const { setCorreo, correo, setClave, clave } = useContext(DataContext);

  const form = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => navigate("/home");

  const emailValidation = (correo) => {
    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const Rex = new RegExp(mail);
    return Rex.test(correo);
  };

  const noSpacePassword = (e) => {
    setClave(e.target.value.trim());
  };

  const noSpaceEmail = (e) => {
    setCorreo(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const { email, password } = Object.fromEntries([...data.entries()]);

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Complete todos los campos requeridos",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (clave.length < 4 || clave.length > 10) {
      Swal.fire({
        icon: "error",
        title: "Tu contraseña de tener una extensión de 4 a 10 dígitos",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (!emailValidation(email)) {
      Swal.fire({
        icon: "error",
        title: "ingrese un email válido por favor",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setClave(password);
      setCorreo(email);
      Swal.fire({
        icon: "success",
        title: "Usuario validado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="formContainer">
      {/* <div className="homeButton" onClick={handleClick}>
        inicio
      </div> */}
      {/* <div className="paint">
        <img src={mainLogo} className="imgLogo" alt="logo company" />
      </div> */}
      <div className="splineContainer">
        <Spline scene="https://prod.spline.design/xVT-vQQeBRSEvUWW/scene.splinecode" />
      </div>
      <div className="contenedorFormulario">
        <div className="boxForm">
          <div className="cover"></div>
          <div className="shadow"></div>
          <div className="contentForm">
            <form className="formMain" onSubmit={handleSubmit} ref={form}>
              <h3 className="logo">
                <FaKey />
              </h3>
              <h2>Iniciar sesión</h2>
              <div className="inputBoxForm">
                <input
                  type="text"
                  name="email"
                  value={correo}
                  onChange={noSpaceEmail}
                  className="textForm"
                />
                <FaUser className="iconForm" />
                <span>Email</span>
              </div>
              <div className="inputBoxForm">
                <input
                  type="password"
                  name="password"
                  value={clave}
                  onChange={noSpacePassword}
                  className="textForm"
                />
                <FaLock className="iconForm" />
                <span>Password</span>
              </div>
              <div className="links">
                <p>
                  <FaQuestionCircle className="iconLink" />
                  Olvidó la contraseña?
                </p>
                <p>
                  <Link to="/crearperfil">
                    <HiUserPlus className="iconLink" />
                    Registrarse
                  </Link>
                </p>
              </div>
              <div className="inputBoxForm">
                <button type="submit" className="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
