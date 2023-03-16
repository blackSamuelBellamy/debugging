import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CrearRepo() {
  const [repositoryType, setRepositoryType] = useState("github");
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [repositoryReview, setRepositoryReview] = useState("");
  const [touched, setTouched] = useState(false);

  const handleRepositoryTypeChange = (event) => {
    setRepositoryType(event.target.value);
  };

  const handleRepositoryUrlChange = (event) => {
    setRepositoryUrl(event.target.value);
  };

  const validateRepositoryReview = () => {
    if (repositoryReview.length < 20 || repositoryReview.length > 500) {
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
    if (repositoryReview.length < 20) {
      alert("La reseña del repositorio debe tener al menos 20 caracteres.");
      return;
    }
    // save repository data here
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
                setRepositoryReview(inputText);
              }
              setTouched(true);
            }}
            value={repositoryReview}
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
            value={repositoryUrl}
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
