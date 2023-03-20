import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../hooks/DataContext';
import axios from 'axios';

function CrearPropInicio() {
  const { id } = useParams()
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cliente, setCliente] = useState(''); // corresponde a base de datos solicitudes a nombre_cliente
  const { solicitudes,setData, programadores } = useContext(DataContext)

 useEffect(() => {
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
      setNombre(res.data.nombre);
      setApellido(res.data.apellido);
      setCliente(res.data.nombre_cliente)
    })
    .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className='maincontainer'>
      <h2>Hola Freecoder <span style={{ fontWeight: 'bold', color: 'blue' }}>{nombre} {apellido}</span></h2> 
      
      <p>El cliente "<span style={{ fontWeight: 'bold', color: 'blue' }}>{cliente}</span>", ha enviado una solicitud.</p>
    </div>
  );
}
export default CrearPropInicio;