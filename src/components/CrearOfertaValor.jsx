import { useState, useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";


export default function CrearOfertaValor() {
  const { oferta_valor, setOferta_valor, foto_url, setFoto_url, data,
    selectedLanguages, selectedFrameworks, selectedDatabases, portafolio, repositorio_url,
    resenha, setLoad } = useContext(DataContext)
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setOferta_valor(inputText);
      if (inputText.length < 20) {
        setErrorMessage("La oferta de valor debe tener al menos 20 caracteres");
      } else {
        setErrorMessage("");
      }
    }
  };

  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = err => reject(err)
    })
  }

  const handleImage = async e => {
    if (e.target.files) {
      const resultado = await convertToBase64(e.target.files[0])
      setFoto_url(resultado)
    }
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    const { nombre, apellido, password: clave, edad, email, area, linkedin, valor_hora = 10_000, telefono } = data
    const result = {
      personalInformation: {
        nombre, apellido, clave, foto_url, edad, email, area, repositorio_url, linkedin,
        resenha, telefono, portafolio, presupuesto: parseInt(valor_hora * 40), oferta_valor, valor_hora
      }, frameworks: selectedFrameworks,
      basedatos: selectedDatabases,
      lenguajes: selectedLanguages
    }
    setLoad(result)
    Swal.fire({
      icon: "success",
      title: "Datos guardados.",
      showConfirmButton: false,
      timer: 1500,
    })
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
              value={oferta_valor}
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
            onChange={handleImage}
            required
          />
        </div>
        <br />
        <Button variant="primary" type="submit" className="consolas-font" id="submit-button" >
          Guardar Oferta de Valor
        </Button>
      </Form>
    </div>
  );
  }
