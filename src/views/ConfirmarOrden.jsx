import { Card, ListGroup, Button } from "react-bootstrap";
import Navegacion from "../components/Navegacion";

function ConfirmRequest() {
  const numeroDeSeguimiento = "123456"; // importar nombre de API o base de datos
  const coderName = "Mary Free Coder"; // importar nombre de API o base de datos

  return (
    <>
      <div className="maincontainer">
       {/*  <Navegacion /> */}
        <div className="maincontainer">
          <h2>¡Felicitaciones!</h2>
          <br />
          <h3>Hemos enviado tu solicitud al Freecoder</h3>
        </div>
        <div className="maincontainer">
          <Card.Title>Coder Name: {coderName}</Card.Title>
        </div>

        <div className="maincontainer-proceso text-center">
          <Card className="mx-auto">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU"
            />
            <Card.Body>
              <Card.Text>
                <div className="maincontainer">
                  <p>Stack tecnoloógico:</p>
                  <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Postgres</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="maincontainer">
          <h3>
            Tu número de seguimiento es el {`${numeroDeSeguimiento || "000"}`}
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
            Volver al inicio
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmRequest;
