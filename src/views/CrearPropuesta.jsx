import React, { useState } from 'react';
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



export default function CrearPropuesta() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
  };

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