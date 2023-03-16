import React, { useState, useEffect } from "react";

function ImportarDatosCliente() {
  const [explanation, setExplanation] = useState(
    "Explicación breve ingresada por el cliente acá"
  );
  const [requiredStack, setRequiredStack] = useState(
    "Lenguaje, framework, etc."
  );
  const [clientComments, setClientComments] = useState(
    "Comentarios adicionales del cliente en texto libre"
  );
  const [externalLink, setExternalLink] = useState("Enlace externo");

  useEffect(() => {
    // Fetch data from a database or API
    // In this example, we'll use hardcoded values for simplicity
    setExplanation(
      "Esta es una explicación breve importada desde la base de datos."
    );
    setRequiredStack("React, Node.js, MongoDB");
    setClientComments(
      "Estoy muy emocionado por este proyecto y espero trabajar contigo pronto."
    );
    setExternalLink("https://example.com/document.pdf");
  }, []);

  const handleExplanationChange = (event) => {
    setExplanation(event.target.value);
  };

  const handleRequiredStackChange = (event) => {
    setRequiredStack(event.target.value);
  };

  const handleClientCommentsChange = (event) => {
    setClientComments(event.target.value);
  };

  const handleExternalLinkChange = (event) => {
    setExternalLink(event.target.value);
  };

  return (
    <div
      className="maincontainer"
      style={{ backgroundColor: "#f5f5f5", color: "#7d7d7d" }}
    >
      <div style={{ backgroundColor: "#f5f5f5", color: "#7d7d7d" }}>
        <h3>Descripción breve del proyecto</h3>
        <br />
        <p className="my-paragraph maincontainer">{explanation}</p>
      </div>
      <br />

      <h3>Stack requerido</h3>
      <p className="my-paragraph maincontainer">{requiredStack}</p>

      <br />
      <h3>Comentarios del cliente</h3>

      <p className="my-paragraph maincontainer">{clientComments}</p>

      <br />
      <h3>Enlace externo con documento de apoyo enviado por el cliente</h3>
      <br />

      <p className="my-paragraph maincontainer">
        <a href={externalLink} target="_blank" rel="noopener noreferrer">{externalLink}</a>
      </p>
    </div>
  );
}

export default ImportarDatosCliente;
