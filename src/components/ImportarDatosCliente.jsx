
import React, { useState, useEffect } from "react";

function ImportarDatosCliente() {
  const [descripcion, setDescripcion] = useState("");
  const [stackRequerido1, setStackRequerido1] = useState(""); // corresponde a base de datos solicitudes a  stack_1
  const [stackRequerido2, setStackRequerido2] = useState(""); // corresponde a base de datos solicitudes a  stack_2
  const [stackRequerido3, setStackRequerido3] = useState(""); // corresponde a base de datos solicitudes a  stack_3
  const [linkExterno, setLinkExterno] = useState(""); // corresponde a base de datos solicitudes a  boceto
  const { solicitudes, useSolicitudes, setData, programadores } =
 useContext(DataContext);

  //useEffect(() => {
    // Fetch data from a database or API
    // In this example, we'll use hardcoded values for simplicity
   // setDescripcion(
//"Esta es una explicación breve importada desde la base de datos."
    //);
   // setRequiredStack("React, Node.js, MongoDB");

   // setExternalLink("https://example.com/document.pdf");
  //}, []);

  const handleExplanationChange = (event) => {
    setDescripcion(event.target.value);
  }; // corresponde a base de datos solicitudes a  descripcion_proyecto

  const handleRequiredStackChange1 = (event) => {
    setStackRequerido1(event.target.value); //no se ocupa
  };
  const handleRequiredStackChange2 = (event) => {
    setStackRequerido2(event.target.value); //no se ocupa
  };

  const handleRequiredStackChange3 = (event) => {
    setStackRequerido3(event.target.value); //no se ocupa
  };

  const handleExternalLinkChange = (event) => {
    setLinkExterno(event.target.value); //no se ocupa
  };

  return (
    <div
      className="maincontainer"
      style={{ backgroundColor: "#f5f5f5", color: "#7d7d7d" }}
    >
      <div style={{ backgroundColor: "#f5f5f5", color: "#7d7d7d" }}>
        <h3>Descripción breve del proyecto</h3>
        <br />
        <p className="my-paragraph maincontainer">{descripcion}</p>
      </div>
      <br />

      <h3>Stack requerido</h3>
      <p className="my-paragraph maincontainer">
        {stackRequerido1}, {stackRequerido2}, {stackRequerido3}
      </p>

      <br />

      <h3>Enlace externo con documento de apoyo enviado por el cliente</h3>
      <br />

      <p className="my-paragraph maincontainer">
        <a href={linkExterno} target="_blank" rel="noopener noreferrer">
          {linkExterno}
        </a>
      </p>
    </div>
  );
}

export default ImportarDatosCliente;