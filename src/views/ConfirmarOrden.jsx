import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navegacion from "../components/Navegacion";
import Swal from "sweetalert2";


function ConfirmRequest() {
  const [data, setData] = useState(null)
  const Navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('clienteToken')) Navigate('/home')
    else {
      const token = localStorage.getItem('clienteToken')
      const regex = /"(.+?)"/;
      const match = token.match(regex);
      const valorClienteToken = match[1]
      const config = {
        headers: {
          'Authorization': `Bearer ${valorClienteToken}`
        }
      }
      axios.get(import.meta.env.VITE_MAIN_API + '/confirmarorden', config)
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: "error",
            title: 'hubo un problema',
            text: "Revisa en tu correo la orden de solicitud, de lo contrario ponte en contacto con nosotros",
            showConfirmButton: false,
            timer: 1500,
          })
        })
    }

  }, [])


  return (
    <>
      <div className="maincontainer">
        {/*  <Navegacion /> */}
        <div className="maincontainer">
          <h2>¡Felicitaciones! {data !== null && data.nombre_cliente}</h2>
          <br />
          <h3>Hemos enviado tu solicitud al Freecoder </h3>
        </div>
        <div className="maincontainer">
          {data !== null && <Card.Title>{data.nombre} {data.apellido}</Card.Title>}
        </div>

        <div className="maincontainer-proceso text-center">
          <Card className="mx-auto">
           {data !== null &&  
           <Card.Img
              variant="top"
              src={data.foto_url}
            />}
            <Card.Body>
              <Card.Text>
                <div className="maincontainer">
                  <p>Stack tecnoloógico:</p>
                  <ul>
                    {data !== null && <li>{data.stack_1}</li>}
                    {data !== null && <li>{data.stack_2}</li>}
                    {data !== null && <li>{data.stack_3}</li>}
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="maincontainer">
          <h3>
            Tu número de seguimiento es el {data !== null && data.solicitud_id}
          </h3>
          <br />
          <h3>Recibirás un correo de confirmación en tu bandeja de entrada</h3>
          <br />
          <p
            style={{
              fontSize: "14px",
              fontWeight: "lighter",
              textAlign: "justify",
            }}
          >
            El Freecoder seleccionado evaluará tu proyecto y te enviará una
            cotización dentro de 48 horas, con un enlace para realizar el pago
            por nuestra plataforma. Recuerda revisar el SPAM.
          </p>
          <br />
          <Button
            variant="primary"
            id="button-crearperfil"
            className="consolas-font"
          >
            <Link to="/home" style={{ color: "white" }}>
              Volver al inicio
            </Link>
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default ConfirmRequest;
