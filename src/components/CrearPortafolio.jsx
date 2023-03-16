import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CrearPortafolio() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length >= 20 && text.length <= 500) {
      console.log(text);
      // Your code to handle form submission goes here
    } else {
      alert("La reseña debe tener entre 20 y 500 caracteres.");
    }
  };

  return (
    <div className="maincontainer">
      <Form className="" onSubmit={handleSubmit}>
        <Form.Group controlId="formFreeText">
          <br />
          <Form.Label>Agrega tu reseña al portafolio (BIO)</Form.Label>
          <br />
          <br />
          <div>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength={500}
              required
              value={text}
              onChange={handleChange}
              placeholder="La reseña debe tener entre 20 y 500 caracteres"
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="consolas-font">
          Guardar Reseña
        </Button>
      </Form>
    </div>
  );
}

