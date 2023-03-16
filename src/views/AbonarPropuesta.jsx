import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AbonarPropuesta1 from "../components/AbonarPropuesta1";
import AbonarPropuesta2 from "../components/AbonarPropuesta2";
import NavBar from "../components/NavBar";
import Navegacion from "../components/Navegacion";

export default function AbonarPropuesta() {
  const [isSaving, setIsSaving] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
      setResponseMessage("Tu abono ha sido recibido, el Freecoder comenzará el trabajo");
    }, 2000); // simulate save operation with a 2 second delay
  };

  return (
    <div className="maincontainer">
      {/* <Navegacion /> */}
      {/* <NavBar /> */}
      <div className="maincontainer">
        <AbonarPropuesta1 />
      </div>
      <div className="maincontainer">
        <AbonarPropuesta2 setShowMessage={setResponseMessage} />
      </div>
      <div className="maincontainer text-center mt-4">
        <Button
          id="button-crearperfil"
          className="consolas-font"
          onClick={handleSaveClick}
          disabled={isSaving}
        >
          {isSaving ? "Guardando..." : "Enviar Abono"}
        </Button>
        {responseMessage && (
          <div style={{ backgroundColor: "#e4e4e4", padding: "15px", textAlign: "center" }}>
            {responseMessage === "Tu abono ha sido recibido, el Freecoder comenzará el trabajo" && (
              <h3 style={{ fontWeight: "bold", color: "blue" }}>{responseMessage}</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
