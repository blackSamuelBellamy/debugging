import { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function CrearPortafolio() {
  const { portafolio, setPortafolio } = useContext(DataContext);

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setPortafolio(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (portafolio.length >= 20 && portafolio.length <= 500) {
      Swal.fire({
        icon: "success",
        title: "Reseña añadida",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "La reseña debe tener entre 20 y 500 caracteres.",
        showConfirmButton: false,
        timer: 1500,
      })
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
              value={portafolio}
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

