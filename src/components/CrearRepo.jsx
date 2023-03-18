import React, { useState, useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function CrearRepo() {
  const { repositorio_url, setRepositorio_url, resenha, setResenha } = useContext(DataContext)

  const [repositoryType, setRepositoryType] = useState("github");
  const [touched, setTouched] = useState(false);

  const handleRepositoryTypeChange = (event) => {
    setRepositoryType(event.target.value);
  };

  const handleRepositoryUrlChange = (event) => {
    setRepositorio_url(event.target.value);
  };

  const validateRepositoryReview = () => {
    if (resenha.length < 20 || resenha.length > 500) {
      return "La reseña del repositorio debe tener entre 20 y 500 caracteres.";
    }
  };

  const getValidationState = () => {
    if (touched) {
      const validationMessage = validateRepositoryReview();
      if (validationMessage) {
        return "error";
      } else {
        return "success";
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (resenha.length < 20) {
      Swal.fire({
        icon: "error",
        title: "La reseña del repositorio debe tener al menos 20 caracteres.",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: "success",
        title: "Datos guardados.",
        showConfirmButton: false,
        timer: 1500,
    })
  }
  };

  return (
    <div className="maincontainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Elige el tipo de repositorio</Form.Label>
          <div>
            <br />
            <Form.Control
              as="select"
              value={repositoryType}
              required
              onChange={handleRepositoryTypeChange}
            >
              <option value="github">GitHub</option>
              <option value="bitbucket">Bitbucket</option>
              <option value="gitlab">GitLab</option>
            </Form.Control>
          </div>
        </Form.Group>
        <Form.Group>
          <br />

          <Form.Label>Reseña breve del repositorio</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(event) => {
              const inputText = event.target.value;
              if (inputText.length <= 500) {
                setResenha(inputText);
              }
              setTouched(true);
            }}
            value={resenha}
            maxLength={500}
            placeholder="La reseña debe tener entre 20 y 500 caracteres"
            isInvalid={getValidationState() === "error"}
            isValid={getValidationState() === "success"}
          />


          <Form.Label>Agregar URL del repositorio</Form.Label>
          <br />
          <Form.Control
            type="url"
            required
            value={repositorio_url}
            onChange={handleRepositoryUrlChange}
          />
        </Form.Group>
        <Button type="submit" className="consolas-font">
          Guardar
        </Button>
      </Form>
    </div>
  );
}
