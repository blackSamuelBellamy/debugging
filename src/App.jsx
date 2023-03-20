import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { States } from "./hooks/DataContext";
import Form from "./views/Form";
import Home from "./views/Home";
import Busqueda from "./views/Busqueda";
import "./components/styles/App.css";
import CrearPerfil from "./views/CrearPerfil";
import MisSolicitudes from "./views/MisSolicitudes";
import PerfilFreecoder from "./views/PerfilFreecoder";
import ContactarFreecoder from "./views/ContactarFreecoder";
import CrearPropuesta from "./views/CrearPropuesta";
import AbonarPropuesta from "./views/AbonarPropuesta";
import ConfirmarOrden from "./views/ConfirmarOrden";
import Seguimiento from "./views/Seguimiento";
import EnvioPropuesta from "./views/EnvioPropuesta";
import Nav from "./components/Nav";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const password = "mySecretPassword"; // replace with your actual password
  //  const [state, setState] = useState(initialState);

  return (
    <div>
      <States>
        <BrowserRouter>
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Form />} />
              <Route path="/missolicitudes" element={<MisSolicitudes />}/>
              <Route path="/crearpropuesta/:id" element={<CrearPropuesta />}/>
              <Route path="/busqueda" element={<Busqueda />} />
              <Route path="/perfil/:id" element={<PerfilFreecoder />} />
              <Route path="/crearperfil" element={<CrearPerfil />} />
              <Route
                path="/contactarfreecoder/:id"
                element={<ContactarFreecoder />}
              />
              <Route path="/abonarpropuesta" element={<AbonarPropuesta />} />
              <Route path="/confirmarorden" element={<ConfirmarOrden />} />
              <Route path="/seguimiento" element={<Seguimiento />} />
              <Route path="/enviopropuesta/:id" element={<EnvioPropuesta />} />
            </Routes>
          </div>
        </BrowserRouter>
      </States>
    </div>
  );
};

export default App;

