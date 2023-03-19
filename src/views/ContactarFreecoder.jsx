import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import { DataContext } from "../hooks/DataContext";
import { useNavigate } from "react-router-dom";
//import Navegacion from "../components/Navegacion";
import Swal from "sweetalert2";
import axios from "axios";

export default function ContactarFreecoder() {
  const { programadores } = useContext(DataContext); //esto se importa
  const { id } = useParams(); //esto se importa
  const [languages, setLanguages] = useState([]);
  const [programadorDetalle, setProgramadorDetalle] = useState([]); //esto se importa
  const [selectedFile, setSelectedFile] = useState(null); //boceto
  const [title, setTitle] = useState(""); //titulo_proyecto
  const [description, setDescription] = useState(""); //descripcion_proyecto
  const [pptoEstimado, setPptoEstimado] = useState(""); //presupuestoreal
  const [comments, setComments] = useState(""); //stack_otros
  const [nombre, setNombre] = useState(""); //nombre_cliente
  const [apellido, setApellido] = useState(""); //apellido
  const [correo, setCorreo] = useState(""); //email
  //había una variable teléfono en el front que fue eliminada por no estar en la BD

  const Navigate = useNavigate()

  useEffect(() => {
    const datosProgramador = programadores.find((x) => x.id === Number(id));
    //este código está sólo para que no se caiga la página por si no encuentra un coder

    if (datosProgramador) {
      setProgramadorDetalle(datosProgramador);
    }
  }, []);

  //código manejo stack lenguajes
  const handleLanguagesChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    if (!selectedOptions) {
      return;
    }
    console.log(event.target.selectedOptions);

    const selectedLanguages = Array.from(
      selectedOptions,
      (option) => option.value
    );

    setLanguages(selectedLanguages);
    localStorage.setItem(
      "selectedLanguages",
      JSON.stringify(selectedLanguages)
    );
    console.log("Selected Languages:", selectedLanguages);
  };

  const handleSaveButtonClick = () => {
    if (languages) {
      const selectedLanguages = languages.join(":");
      localStorage.setItem("selectedLanguages", selectedLanguages);
      console.log("Selected Languages:", selectedLanguages);
    }
  };

  const handleSaveButtonComments = () => {
    if (comments) {
      console.log("Comentarios:", comments);
    }
  };

  /*   const handleSaveButtonLangClick = () => {
    if (languages) {
      console.log("Selected Languages:", languages);
    }
  };
 */
  const handleSaveButtonClientClick = () => {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("correo", correo);
    //    localStorage.setItem("telefono", telefono);
  };

  const handleSaveButtonImgClick = () => {
    console.log("Selected File:", selectedFile);
    localStorage.setItem("selectedFile", JSON.stringify(selectedFile));
  };

  const handleFileChange = (event) => {
    const url = event.target.value;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(url)) {
      setSelectedFile(url);
      localStorage.setItem("selectedFile", url);
    } else {
      alert("La URL ingresada no es válida. Por favor ingrese una URL válida.");
    }
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    console.log("Number entered:", pptoEstimado);
    const inputValue = event.target.value;
    if (!isNaN(inputValue)) {
      const inputNumber = Number(inputValue);
      if (inputNumber !== 0) {
        setPptoEstimado(inputNumber);
        console.log("Data saved:", inputNumber);
      }
    }
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    localStorage.setItem("description", description);
  };

  const handleSubmitComments = (event) => {
    event.preventDefault();
    console.log(comments);
    localStorage.setItem("comments", comments);
    setComments("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    localStorage.setItem("title", event.target.value);
  };  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    localStorage.setItem("description", event.target.value);
  };

  const handleSaveTitleDescClick = () => {
    console.log("Titulo y descripcion:", title, description);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
    localStorage.setItem("comments", event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    localStorage.setItem("nombre", event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
    localStorage.setItem("apellido", event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    localStorage.setItem("correo", event.target.value);
  };

  const handleClientFormSubmit = (event) => {
    event.preventDefault();
    console.log({ nombre, apellido, correo });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
   const stack_1 = languages[0]
   const stack_2 = languages[1]
   const stack_3 = languages[2]
    const load = [{
      nombre, apellido, correo,
      title, description, stack_1: 'JavaScript', stack_2: 'Python', stack_3: 'go',
      comments, selectedFile, pptoEstimado, id
    }]
    axios.post(import.meta.env.VITE_MAIN_API + /contactarfreecoder/ + id, load)
    .then(res => {
      localStorage.setItem('clienteToken', JSON.stringify(res.data))
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "La solicitud ha sido enviada con éxito al Freecoder.",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      })
    })

    setTimeout(() => {
      localStorage.getItem('clienteToken') && Navigate('/confirmarorden')
    }, 1500)
   
  };
  return (
    <>
      <div className="maincontainer">
        {/*   {/* <Navegacion /> */}
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-12  secc-izq maincontainer">
            <h2>Nombre Programador: </h2>

            <Card className="maincontainer">
              <Card.Title className="card-nombre">
                {programadorDetalle.nombre} {programadorDetalle.apellido}
              </Card.Title>
              <Card.Img
                variant="top"
                src={programadorDetalle.foto_url}
                alt="foto-perfil"
              />

              <ListGroup className="list-group-flush">
                <ListGroup.Item>{programadorDetalle.area}</ListGroup.Item>
              </ListGroup>
            </Card>

            <div className="precio-horas maincontainer">
              <h4 className="precio-texto">Valor hora</h4>
              <FaMoneyBillWave className="icono" />
              <h4 className="precio-texto">{programadorDetalle.valor_hora}</h4>
            </div>
          </div>

          <div className="col-xl-9 col-md-8 col-sm-12">
            <div className="maincontainer">
              <h3>Crea un título para tu proyecto</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="description"
                    value={title} // correseponde a columna "titulo_proyecto"
                    onChange={handleTitleChange}
                    placeholder="Título para tu proyecto"
                    required
                    maxLength={50}
                  />
                  <br />
                  {title.length === 0 && (
                    <span style={{ color: "red" }}>
                      Este campo es requerido
                    </span>
                  )}
                </div>
              </form>
              <br />
              <h4>Describe brevemente tu proyecto</h4>

              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="description"
                    value={description} //columna "descripcion_proyecto"
                    onChange={handleDescriptionChange}
                    placeholder="Descripción detallada de aspectos funcionales"
                    required
                    maxLength={1000}
                  />
                  <br />
                  {description.length === 0 && (
                    <span style={{ color: "red" }}>
                      Este campo es requerido
                    </span>
                  )}
                </div>
              </form>
              <button type="submit" onClick={handleSaveTitleDescClick}>
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
                        label={language} // corresponde a columnas "stack 1, stack 2 y stack 3"
                        onChange={handleLanguagesChange}
                      />
                    </div>
                  ))}
                </Form>
                <Button
                  className="button-stack"
                  type="submit"
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              </div>
              <br />
              <div className="stack-comentarios">
                <h4>¿No encontraste lo que buscabas? Agrégalo acá:</h4>
                <br />
                <form className="form-texto" onSubmit={handleSubmitComments}>
                  <div>
                    <textarea
                      id="comments"
                      value={comments} // corresponde a columna "stack_otros"
                      onChange={handleCommentsChange}
                      required
                    />
                  </div>
                </form>
                <Button
                  className="button-stack"
                  type="submit"
                  onClick={handleSaveButtonComments}
                >
                  Guardar
                </Button>
              </div>
            </div>

            <Form
              onSubmit={handleNumberChange}
              className="form-adicional maincontainer"
            >
              <Form.Group controlId="formFreeText">
                <Form.Label>
                  Agrega un presupuesto de referencia en pesos Chilenos
                </Form.Label>
                <br />
                <br />
                <Form.Control
                  type="number"
                  required
                  value={pptoEstimado}
                  onChange={(event) => setPptoEstimado(event.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="button-guardar"
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
                      type="url" // corresponde a columna "boceto"
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
                  onClick={handleSaveButtonImgClick}
                >
                  Guardar
                </Button>
              </div>
            </div>

            <Form className="maincontainer" onSubmit={handleClientFormSubmit}>
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
                  value={nombre} // columna "nombre_cliente"
                  onChange={handleNombreChange}
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Agregar apellido"
                  value={apellido} //columna "apelludo_cliente"
                  onChange={handleApellidoChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Ingresar correo"
                  value={correo} //columna_email
                  onChange={handleCorreoChange}
                />
              </Form.Group>
              <Form.Group controlId="formTelefono">
                {/*   <Form.Label>Numero telefónico</Form.Label>  // NRO de teléfono no está en base "solicitudes"
                <div>
                  <Form.Control
                    type="number"
                    required
                    placeholder="Ingresar numero telefonico"
                    style={{ width: "300px", borderColor: "#dcdcdc" }}
                    value={telefono}
                    onChange={handleTelefonoChange}
                  />
                </div> */}
                <Button
                  variant="primary"
                  type="submit"
                  className="button-guardar"
                  onClick={handleSaveButtonClientClick}
                >
                  Guardar
                </Button>
              </Form.Group>
            </Form>
            <Form onSubmit={handleFormSubmit}>
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