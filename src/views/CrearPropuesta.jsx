import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';
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
import Swal from 'sweetalert2';




export default function CrearPropuesta() {

  const [isSaving, setIsSaving] = useState(false);
  const [order, setOrder] = useState('')

  const Navigate = useNavigate()
  const { id } = useParams()

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

  const creating = () => {
    const titulo_propuesta = localStorage.getItem("propuesta_titulo")
    const descripcion_propuesta = localStorage.getItem("descripcion_propuesta")
    const stack_1 = JSON.parse(localStorage.getItem('stack_1'))[0]
    const stack_2 = JSON.parse(localStorage.getItem('stack_2'))[0]
    const stack_3 = JSON.parse(localStorage.getItem('stack_3'))[0]
    const stack_otros = localStorage.getItem('stackOtros')
    const alcance = localStorage.getItem('alcance')
    const cantidad_revisiones = JSON.parse(localStorage.getItem('cantidadRevisiones'))
    const horas_estimadas = JSON.parse(localStorage.getItem("horasEstimadas"))
    const valor_final = JSON.parse(localStorage.getItem("valorFinal"))

    const load = [{
      titulo_propuesta, descripcion_propuesta, stack_1, stack_2, stack_3, stack_otros,
      alcance, cantidad_revisiones, horas_estimadas, valor_final
    }]
    const token = localStorage.getItem("coderToken");
    const regex = /"(.+?)"/;
    const match = token.match(regex);
    const valorCoderToken = match[1];
    const config = {
      headers: {
        Authorization: `Bearer ${valorCoderToken}`,
      },
    }
    axios.post(import.meta.env.VITE_MAIN_API + `/crearpropuesta/${id}`, load, config)
      .then(res => {
        Swal.fire({
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        })
        Navigate('/home')
      })
      .catch(err => {
        swal.fire({
          icon: 'error',
          title: 'hubo un error',
          text: err.response,
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
    creating()
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