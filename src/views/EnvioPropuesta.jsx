import { Container, Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navegacion from "../components/Navegacion";
//import { userName, date, randomName } from "../database";

const temporaryData = {
  userName: "Mary Freecoder",
  date: "2022-10-01",
  clientName: "Francisco",
};

function EnvioPropuesta() {
  const { userName, date, clientName } = temporaryData;

  const title = "Título ingresado por freecoder (Placeholder)";
  const description =
    "Descripción detallada de aspectos funcionales declarados por Freecoder (Placeholder)";
  const technologies =
    "Tecnologías declaradas por el freecoder, separadas por comas (Placeholder)";
  const frameworks =
    "Frameworks declarados por el freecoder, separados por comas (Placeholder)";
  const databases =
    "Bases de datos declaradas por el freecoder, separadas por comas (Placeholder)";
  const scope =
    "Alcances, límites, aspectos no contemplados en el servicio (Placeholder)";
  const revisions = Math.floor(Math.random() * 5) + 1;
  const hours = Math.floor(Math.random() * 96) + 5;
  const hourlyRate = Math.floor(Math.random() * 90001) + 10000;
  const finalValue = revisions * hours * hourlyRate;

  return (
    <>
      <div className="text-center maincontainer">
        <div className="maincontainer">
          {/* <Navegacion /> */}
          <br />
          <h2> ¡Felicitaciones {clientName}! </h2>
          <br />
          <p>Nuestro coder {userName} te ha enviado una propuesta</p>
        </div>

        <div className="maincontainer">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU"
          />
        </div>
        <div className="maincontainer">
          <Card className="text-center">
            <Card.Header>
              <h2>Seguimiento</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h2>S001</h2>
              </Card.Title>
              <br />
              <Card.Text>Fecha de solicitud: {date}</Card.Text>
              <Card.Text>Nombre del solicitante: {clientName}</Card.Text>
              <br />
              <Card.Text>
                Proyecto: Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Similique, eum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div >
          <h2 className="maincontainer" >Detalles de propuesta</h2>
          <div className="maincontainer">
            <div className="table-responsive">
              <Table striped="columns" className="striped-bordered-hover">
                <thead style={{ backgroundColor: "grey", color: "whitesmoke" }}>
                  <tr style={{ borderBottom: "1px solid lightgrey" }}>
                    <th>Elemento</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Título del proyecto:</td>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <td>Descripción detallada de aspectos funcionales</td>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <td>Tecnologías a utilizar</td>
                    <td>{technologies}</td>
                  </tr>
                  <tr>
                    <td>Frameworks a utilizar</td>
                    <td>{frameworks}</td>
                  </tr>
                  <tr>
                    <td>Bases de datos</td>
                    <td>{databases}</td>
                  </tr>
                  <tr>
                    <td>Alcance</td>
                    <td>{scope}</td>
                  </tr>
                  <tr>
                    <td>Cantidad de revisiones</td>
                    <td>{revisions}</td>
                  </tr>
                  <tr>
                    <td>Horas estimadas de desarrollo</td>
                    <td>{hours}</td>
                  </tr>
                  <tr>
                    <td>Valor hora en pesos Chilenos</td>
                    <td>{hourlyRate}</td>
                  </tr>
                  <tr>
                    <td>Valor Final en Pesos Chilenos</td>
                    <td>{finalValue}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="maincontainer">
            <Button type="submit"> Aceptación de la propuesta </Button>
            <Button type="submit" id="maincontainer-button2">
              {" "}
              Rechazo de la propuesta{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnvioPropuesta;
