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
  //  const { isSaving, setIsSaving } = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  const Navigate = useNavigate()
  const coderToken = localStorage.getItem("coderToken");
  useEffect(() => {
    if (!localStorage.getItem('coderToken')) Navigate('/login')
    else {
    
      axios.get("http://localhost:5500/missolicitudes", {
          headers: { Authorization: `Bearer ${coderToken}` },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
    }

  }, []);

  /*   const handleSaveClick = () => {
    setIsSaving(true);
    // Save all changes here
    setTimeout(() => {
      setIsSaving(false);
    }, 2000); // simulate save operation with a 2 second delay
  }; */

  return (
    <div className="maincontainer">
      {/* <Navegacion /> */}
      <br />

      <header className="row mt-4">
        <br />

        <div className="col-12 maincontainer">
          <h2>Hola Freecoder: ___</h2>
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Table striped bordered hover>
                <tbody >

                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      id
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.id)} // id de tabla solicitudes
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      Descripcion_proyecto
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.programador_id)} //descripcion_proyecto de tabla solicitudes
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      Presupuesto
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.descripcion_proyecto)} //presupuestoreal de tabla solicitudes
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      Nombre Cliente
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.presupuesto)} //nombre_cliente de tabla solicitudes
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      Fecha_solicitud
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.cliente_id)} //Fecha_solicitud de tabla solicitudes
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ced1e1",
                        fontWeight: "normal",
                        padding: "10px",
                      }}
                    >
                      Status Orden
                    </th>
                    <td
                      style={{ border: "1px solid #ced1e1", padding: "10px" }}
                    >
                      {orders.map((order) => order.order_status)} //no hay campo para esto, habría que crear uno o dejarlos todo como "en proceso" por defecto.
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Link to="/crearpropuesta" style={{ textDecoration: "none" }} >
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
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}