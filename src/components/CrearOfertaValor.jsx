import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CrearOfertaValor() {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
      if (inputText.length < 20) {
        setErrorMessage("La oferta de valor debe tener al menos 20 caracteres");
      } else {
        setErrorMessage("");
      }
    }
  };



  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
      document.getElementById('submit-button').disabled = false;
    } else {
      setImageURL('');
      document.getElementById('submit-button').disabled = true;
      setErrorMessage('Por favor selecciona una imagen.');
      alert('Por favor selecciona una imagen.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, imageURL);
    // Your code to handle form submission goes here
  };

  return (
    <div className="maincontainer">
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formFreeText">
          <Form.Label>
            Agrega tu oferta de valor, un resumen de lo que te destaca{" "}
          </Form.Label>
          <br />
          <br />
          <div>
            <Form.Control
              as="textarea"
              rows={3}
              required
              maxLength={500}
              value={text}
              placeholder="La reseña debe tener entre 20 y 500 caracteres"
              onChange={handleChange}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </Form.Group>
        <br />

        <div className="maincontainer" controlId="formImageUpload">
          <Form.Label>Sube una imagen para presentarla en tu perfil de Freecoder</Form.Label>
          <br />
          <br />
          <input
            className="input-valor"
            type="file"
            accept=".png, .jpg, .jpeg, .bmp, .gif, .tiff"
            onChange={handleImageUpload}
            required
          />
        </div>
        <br />
        <Button variant="primary" type="submit" className="consolas-font" id="submit-button" disabled={!imageURL} >
          Guardar Oferta de Valor
        </Button>
      </Form>
    </div>
  );
}
