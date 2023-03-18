import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";

import axios from "axios";

export default function PerfilFreecoder() {
  const [coder, setCoder] = useState('')


  const navigate = useNavigate();

  const irContacto = (id) => {
    navigate(`/contactarfreecoder/${id}`);
    console.log(id);
  };

  const { id } = useParams()

  useEffect(() => {
    axios.get(import.meta.env.VITE_MAIN_API + '/perfil/' + id)
      .then(res => {
        setCoder(res.data[0])
      })
      .catch(err => console.log(err.message))
  }, [])
  return (
    <div className="maincontainer">
      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-12  ajustes-card">
          <Card className="maincontainer">
            <Card.Title className="card-nombre ">
              <h2>Nombre Programador: {coder.nombre} {coder.apellido}</h2>
            </Card.Title>
            <Card.Img
              variant="top"
              className="maincontainer"
              src={coder.foto_url}
              alt="foto-perfil"
            />

            <ListGroup className="list-group-flush">
              <ListGroup.Item >{coder.area}</ListGroup.Item>

              <div className="maincontainer">
                <p>Stack tecnológico:</p>
                <ul>
                  {coder.lenguajes && coder.lenguajes.map((x, i) => <li key={i}>{x}</li>)}
                  {coder.frameworks && coder.frameworks.map((x, i) => <li key={i}>{x}</li>)}
                  {coder.basedatos && coder.basedatos.map((x, i) => <li key={i}>{x}</li>)}
                </ul>

              </div>
              <div className="maincontainer">
                <p className="precio-texto">Valor hora</p>
                <FaMoneyBillWave className="icono" />
                <p className="precio-texto">{coder.valor_hora}</p>
              </div>
            </ListGroup>
          </Card>

          <div className="maincontainer">
            {" "}
            <Button
              type="submit"
              onClick={() => irContacto(coder.id)}
            >
              Contactar Freecoder
            </Button>
          </div>
        </div>

        <div className="col-xl-9 col-md-8 col-sm-12 maincontainer">
          <div className="resumen-de-habilidades">
            <h2>Resumen de habilidades</h2>
            <br />

            <p className="resumen-texto">
              {coder.portafolio}
            </p>
          </div>
          <br />
          <br />
          <h2>Repositorio:</h2>
          <div className="repositorio maincontainer">
            <Table>
              <tbody>
                <tr>
                  <td>
                    <a href={coder.repositorio_url}>
                      {coder.repositorio_url}
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2>Reseña</h2>
          <br />
          <div className="repositorio maincontainer">
            <Table>
              <tbody>
                <tr>
                  {coder.resenha}
                </tr>
              </tbody>
            </Table>
          </div>
          <br />
          <div className="bio">
            <h2>Mi oferta de valor</h2>
            <div className="oferta-de-valor">
              <br />
              <p>
                {coder.oferta_valor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
