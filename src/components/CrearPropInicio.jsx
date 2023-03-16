import React, { useState, useEffect } from 'react';

function CrearPropInicio() {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');

  useEffect(() => {
    // Fetch the name and client from a database or API
    // In this example, we'll use hardcoded values
    setName('Mary Freecoder');
    setClient('Francisco');
  }, []);

  return (
    <div className='maincontainer'>
      <h2>Hola Freecoder <span style={{ fontWeight: 'bold', color: 'blue' }}>{name}</span></h2>
      <br />
      <p>El cliente "<span style={{ fontWeight: 'bold', color: 'blue' }}>{client}</span>", ha enviado una solicitud.</p>
    </div>
  );
}
export default CrearPropInicio;