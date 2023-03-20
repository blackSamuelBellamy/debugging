import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
//import { useParams } from 'react-router-dom';
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
//import Badge from 'react-bootstrap/Badge';
//import CrearDatosPerfil from './viewscrearperfil/CrearDatosPerfil';
import CrearPropInicio from '../components/CrearPropInicio';
import ImportarDatosCliente from '../components/ImportarDatosCliente';
import Navegacion from '../components/Navegacion';
import RedactarPropuesta1 from '../components/RedactarPropuesta1';
import RedactarPropuesta2 from '../components/RedactarPropuesta2';
import RedactarPropuesta3 from '../components/RedactarPropuesta3';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



export default function CrearPropuesta() {
  const [isSaving, setIsSaving] = useState(false);
  const [order, setOrder] = useState('')
  const Navigate = useNavigate()
  const { id } = useParams()

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
  };

  useEffect(() => {
    if (!localStorage.getItem("coderToken")) Navigate("/login");
    else {
      const token = localStorage.getItem("coderToken");
      const regex = /"(.+?)"/;
      const match = token.match(regex);
      const valorCoderToken = match[1];
      const config = {
        headers: {
          Authorization: `Bearer ${valorCoderToken}`,
        },
      };

      axios
        .get(import.meta.env.VITE_MAIN_API + `/crearpropuesta/${id}`, config)
        .then((res) => {
          setOrder(res.data);
          console.log(res.data)
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  return (
    <div className='maincontainer' >
     {/*  <Navegacion /> */}
      <div>{<CrearPropInicio />}</div>
      <div>{<ImportarDatosCliente />}</div>
      <div>{<RedactarPropuesta1 />}</div>
      <div>{<RedactarPropuesta2 />}</div>
      <div>{<RedactarPropuesta3 />}</div>

      <div className="text-center mt-4">
        <Button id='button-crearperfil' className="consolas-font" onClick={handleSaveClick} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Enviar propuesta al cliente'}
        </Button>
      </div>
    </div>
  );
}