import React, { useContext, useState, useEffect } from "react";

import { DataContext } from "../hooks/DataContext";
import { Button } from "react-bootstrap";
import CrearDatosPerfil from "../components/CrearDatosPerfil";
import CrearPortafolio from "../components/CrearPortafolio";
import CrearOfertaValor from "../components/CrearOfertaValor";
import CrearRepo from "../components/CrearRepo";
import AddSkills from "../components/AddSkills";
import Navegacion from "../components/Navegacion";
import { Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function MisSolicitudes() {
  const [data, setData] = useState({ nombre: "", apellido: "" });
  const [orders, setOrders] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("coderToken")) Navigate("/login");
    else {
      const token = localStorage.getItem("coderToken");
      const regex = /"(.+?)"/;
      const match = token.match(regex);
      const valorCoderToken = match[1];
      console.log(valorCoderToken);
      const config = {
        headers: {
          Authorization: `Bearer ${valorCoderToken}`,
        },
      };

      axios
        .get(import.meta.env.VITE_MAIN_API + "/missolicitudes", config)
        .then((res) => {
          setData(res.data);
          setOrders(res.data.solicitudes);
          console.log(res.data.solicitudes)
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  const { nombre, apellido } = data;
    return (
    <div className="maincontainer">
      <br />

      <header className="row mt-4">
        <br />

        <div className="col-12 maincontainer">
          <h2 style={{ textTransform: "uppercase" }}>
            Hola Freecoder: {nombre} {apellido}{" "}
          </h2>
        </div>
        <br />
      </header>
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10">
          <Card className="my-4 w-100 maincontainer">
            <Card.Header>
              <h4>Mis órdenes recibidas y su estado:</h4>
              <br />
            </Card.Header>
            <br />
            <Card.Body
              style={{
                backgroundColor: "#f1f1f1",
                alignItems: "center",
              }}
            >
              <Table
                bordered
                responsive
                style={{
                  borderSpacing: "10px",
                  fontSize: "80%",
                  borderRadius: "5px",
                  borderColor: "darkgrey",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                <thead
                  style={{ backgroundColor: "darkgrey", fontSize: "120%" }}
                >
                  <tr>
                    <th>Elemento</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => (
                      <>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              borderColor: "white",
                              borderWidth: "1px",
                              borderStyle: "solid",
                            }}
                          >
                            id
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.id}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              borderColor: "white",
                              borderWidth: "1px",
                              borderStyle: "solid",
                            }}
                          >
                            Estado de la solicitud
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            Propuesta en desarrollo
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Nombre del proyecto
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.titulo_proyecto}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Descripción del proyecto
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.descripcion_proyecto}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Nombre cliente
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.nombre_cliente}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Apellido cliente
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.apellido}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Correo del cliente
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.email}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Presupuesto estimado inicialmente
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            ${order.presupuesto.toLocaleString('en-US').replace(/\,/g, '.')}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Stack tecnológico recomendado por el cliente
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.stack_1}, {order.stack_2}, {order.stack_3},{" "}
                            {order.stack_otros}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                            }}
                          >
                            Ejemplo o boceto de referencia
                          </td>
                          <td
                            style={{
                              wordWrap: "break-word",
                              maxWidth: "200px",
                              backgroundColor: "white",
                            }}
                          >
                            {order.boceto}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <Link
                              to={`/crearpropuesta/${order.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="primary"
                                type="submit"
                                className="button-guardar"
                              >
                                Ir a detalle solicitud
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}