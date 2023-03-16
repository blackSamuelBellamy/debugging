import * as React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export default function CrearDatosPerfil() {
  const mainForm = useRef(null);
  const [rate, setRate] = useState(10000);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //  const [confirmUrl, setConfirmUrl] = useState("");

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirm } = e.target.elements;

    if (password.value !== confirm.value) {
      alert("La contraseña y la confirmación de contraseña no coinciden");
      return;
    }

    if (password.value.length < 4 || password.value.length > 10) {
      setPasswordError("La contraseña debe tener entre 4 y 10 caracteres");
      return;
    }

    console.log(mainForm.current);
  };

  return (
    <Form ref={mainForm} onSubmit={handleSubmit}>
      <div className="maincontainer">
        <h2>Ingresa tus datos para crear tu perfil</h2>
      </div>

      <div className="maincontainer">
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar nombre"
            name="nombre"
            required
            aria-label="Campo obligatorio: Nombre"
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar apellido"
            required
            aria-label="Campo obligatorio: Apellido"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar correo"
            required
            aria-label="Campo obligatorio: Dirección de correo electrónico"
          />
        </Form.Group>

        <br />
        <Form.Group controlId="formPhone">
          <Form.Label>Ingresa tu número de teléfono celular</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Formato 5612345678"
            required
            pattern="[00-9]{8,14}"
            aria-label="Campo obligatorio: Teléfono"
          />
        </Form.Group>

        <br />
        <Form noValidate>
          <Form.Group controlId="formAge">
            <Form.Label>Edad</Form.Label>
            <br />
            <Form.Control
              type="number"
              placeholder="Ingresa tu edad"
              required
              aria-label="Campo obligatorio: Edad"
            />
          </Form.Group>
        </Form>
        <br />


        <Form.Group controlId="formUrl">
          <Form.Label>Perfil de Linkedin</Form.Label>
          <br />
          <Form.Control
            type="url"
            placeholder="URL de Linkedin"
            required
            aria-label="Campo obligatorio: URL"
          />
        </Form.Group>
        <br />
        <br />
        <Form.Group controlId="formUrl">
          <Form.Label>Área de especialidad</Form.Label>
          <br />
          <Form.Select required aria-label="Campo obligatorio: Especialidad">
            <option value="">Seleccione una opción</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
          </Form.Select>
        </Form.Group>
        <br />

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar contraseña"
            name="password"
            required
            aria-label="Campo obligatorio: Contraseña"
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmar contraseña"
            name="confirm"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-label="Campo obligatorio: Confirmar Contraseña"
          />
        </Form.Group>
        <div className="text-danger">{passwordError}</div>
        <br />

        <Form.Group controlId="formRate">
          <Form.Label>Valor por hora: ${rate}</Form.Label>
          <RangeSlider
            value={rate}
            min={10000}
            max={500000}
            step={1}
            onChange={handleRateChange}
          />
          <Button variant="primary" type="submit" className="consolas-font">
            Guardar datos
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
}
