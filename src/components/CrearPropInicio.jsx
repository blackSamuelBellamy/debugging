import React, { useState, useEffect } from 'react';

function CrearPropInicio() {
  const [nombre, setNombre] = useState('');
  const [cliente, setCliente] = useState(''); // corresponde a base de datos solicitudes a nombre_cliente
  const { solicitudes,setData, programadores } = useContext(DataContext)

 // useEffect(() => {
    // Fetch the name and client from a database or API
    // In this example, we'll use hardcoded values
   // setName('Mary Freecoder');
   // setClient('Francisco');
  //}, []);// este use effect es solo para realizar pruebas

  return (
    <div className='maincontainer'>
      <h2>Hola Freecoder <span style={{ fontWeight: 'bold', color: 'blue' }}>{nombre}</span></h2> //no existe en la base de datos solicitudes el nombre del coder solo programador id, habria que llamarlo de la base de datos programadores: nombre
      <br />
      
      <p>El cliente "<span style={{ fontWeight: 'bold', color: 'blue' }}>{cliente}</span>", ha enviado una solicitud.</p>  // corresponde a base de datos solicitudes a nombre_cliente
      
    </div>
  );
}
export default CrearPropInicio;