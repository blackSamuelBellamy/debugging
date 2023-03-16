import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import { DataContext } from "../hooks/DataContext";
import Navegacion from "../components/Navegacion";

export default function ContactarFreecoder() {
  const { coders } = useContext(DataContext);

  const { id } = useParams();
  const [languages, setLanguages] = useState([]);
  const [programadorDetalle, setProgramadorDetalle] = useState([]);
  const [ProgramadorStack, setProgramadorStack] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const obtenerDatos = () => {
      if (coders) {
        const datosProgramador = coders.find(
          (programador) => programador.id === id
        );
        if (datosProgramador !== undefined) {
          setProgramadorDetalle(datosProgramador || []);
          setProgramadorStack(datosProgramador.area || []);
        }
      }
    };

    obtenerDatos();
  }, [id, coders]);

  const handleLanguagesChange = (event) => {
    const selectedLanguages = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setLanguages(selectedLanguages);
  };

  const handleSaveButtonClick = () => {
    console.log("Selected Languages:", languages);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "image/png",
      "image/jpeg",
    ];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert(
        "El archivo seleccionado no es válido. Por favor seleccione un archivo PDF, Word, PNG o JPG."
      );
    }
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    localStorage.setItem("description", description);
  };

  const handleSubmitComments = (event) => {
    event.preventDefault();
    console.log(text);
    localStorage.setItem("comments", comments);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <>
      <div className="maincontainer">
        {/* <Navegacion /> */}
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-12  secc-izq maincontainer">
            <h2>Nombre Programador: Mary Freecoder</h2>

            <Card className="maincontainer">
              <Card.Title className="card-nombre">
                {programadorDetalle.nombre} {programadorDetalle.apellido}
              </Card.Title>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU"
                alt="foto-perfil"
              />

              <ListGroup className="list-group-flush">
                {ProgramadorStack.map((area) => (
                  <ListGroup.Item key={area}>{area}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            <div className="precio-horas maincontainer">
              <h4 className="precio-texto">Valor hora</h4>
              <FaMoneyBillWave className="icono" />
              <h4 className="precio-texto">15.000</h4>
            </div>
          </div>

          <div className="col-xl-9 col-md-8 col-sm-12">
            <div className="maincontainer">
              <h3>Crea un título para tu proyecto</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="description"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Título para tu proyecto"
                    required
                    maxLength={50}
                  />
                  <br />
                  {title.length === 0 && <span style={{ color: 'red' }} >Este campo es requerido</span>}
                </div>
              </form>
              <br />
              <h4>Describe brevemente tu proyecto</h4>

              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Descripción detallada de aspectos funcionales"
                    required
                    maxLength={1000}
                  />
                  <br />
                  {description.length === 0 && <span style={{ color: 'red' }}>Este campo es requerido</span>}

                </div>
              </form>
              <button type="submit" onClick={handleSaveButtonClick}>
                Guardar
              </button>
            </div>
            

            <div className="maincontainer">
              <div className="stack-orden">
                <h3 className="stack-titulo">Elige el stack requerido:</h3>
                <Form>
                  {[
                    "Python",
                    "JavaScript",
                    "Java",
                    "C++",
                    "PHP",
                    "C#",
                    "Swift",
                    "TypeScript",
                    "Kotlin",
                    "Go",
                    "React",
                    "Angular",
                    "Vue.js",
                    "Ruby on Rails",
                    "Django",
                    "Spring",
                    "Express.js",
                    "Laravel",
                    "Flask",
                    "ASP.NET",
                    "MySQL",
                    "PostgreSQL",
                    "Oracle",
                    "MongoDB",
                    "Microsoft SQL Server",
                    "SQLite",
                    "Cassandra",
                    "Redis",
                    "Firebase Realtime Database",
                    "Amazon Aurora",
                  ].map((language) => (
                    <div key={language} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={language}
                        label={language}
                        multiple
                        onChange={handleLanguagesChange}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <br />
              <div className="stack-comentarios">
                <h4>¿No encontraste lo que buscabas? Agrégalo acá:</h4>
                <br />
                <form className="form-texto" onSubmit={handleSubmitComments}>
                  <div>
                    <textarea
                      id="comments"
                      value={comments}
                      onChange={handleCommentsChange}
                      required
                    />
                  </div>
                </form>
                <Button
                  className="button-stack"
                  type="submit"
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              </div>
            </div>

            <Form
              onSubmit={handleSubmit}
              className="form-adicional maincontainer"
            >
              <Form.Group controlId="formFreeText">
                <Form.Label>
                  Agrega comentarios o preguntas adicionales
                </Form.Label>

                <br />
                <br />

                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  maxLength={500}
                  value={text}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="button-guardar"
                onClick={handleSaveButtonClick}
              >
                Guardar
              </Button>
            </Form>

            <div>
              <div
                className="maincontainer"
                style={{ backgroundColor: "#E4E4E4" }}
              >
                <div className="maincontainer">
                  <h3> ¿Tienes una imagen o boceto de tu proyecto o idea?</h3>
                  <br />
                  <p>
                    Opcionalmente, puedes subir un enlace a un repositorio con
                    un archivo de referencia
                  </p>
                  <br />
                  <label>
                    <input
                      type="url"
                      onChange={handleFileChange}
                      placeholder="www.ejemplo.png"
                      required
                    />
                  </label>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="button-guardar"
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              </div>
            </div>

            <Form className="maincontainer">
              <div>
                <h2>Ingresa tus datos </h2>
              </div>
              <br />
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Agregar nombre"
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Agregar apellido"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Ingresar correo"
                />
              </Form.Group>
              <Form.Group controlId="formTelefono">
                <Form.Label>Numero telefónico</Form.Label>
                <div>
                  <Form.Control
                    type="number"
                    required
                    placeholder="Ingresar numero telefonico"
                    style={{ width: "300px", borderColor: "#dcdcdc" }}
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar solicitud
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
