import { useState } from "react";

function RedactarPropuesta3() {
  const [technologies, setTechnologies] = useState("");
  const [scope1, setScope1] = useState("");
  const [hours, setHours] = useState("");
  const [revisions, setRevisions] = useState("");
  const [value, setValue] = useState("");
  const [hourValue, setHourValue] = useState("");

  const handleSave = () => {
    if (!technologies || !scope1 || !revisions || !hours || !hourValue || !value) {
      alert("Por favor completa todos los campos antes de guardar.");
      return;
    }

    const data = {
      technologies,
      scope1,
      hours,
      revisions,
      value,
    };
    localStorage.setItem("projectData", JSON.stringify(data));
  };

  const calculateValue = () => {
    const calculatedValue = hours * hourValue;
    setValue(calculatedValue);
  };

  return (
    <div className="maincontainer">
      <div>
        <h3>Otras Tecnologías a utilizar</h3>
        <textarea
          className="my-textarea"
          placeholder="Tecnologías separadas por comas"
          value={technologies}
          maxLength={50}
          required
          onChange={(e) => setTechnologies(e.target.value)}
        />
      </div>
      <br />
      <div>
        <h3>Alcance</h3>
        <textarea
          className="my-textarea"
          placeholder="Alcances, límites, aspectos no contemplados en el servicio.Ejemplo: No incluye hosting."
          value={scope1}
          maxLength={100}
          onChange={(e) => setScope1(e.target.value)}
        />
      </div>
      <br />

      <div>
        <h3>Cantidad de revisiones</h3>
        <input
          type="number"
          placeholder="Revisiones"
          value={revisions}
          required
          onChange={(e) => setRevisions(e.target.value)}
        />
      </div>
      <br />
      <div>
        <h3>Horas estimadas de desarrollo</h3>
        <input
          type="number"
          placeholder="Horas de desarrollo"
          value={hours}
          required
          onChange={(e) => setHours(e.target.value)}
        />
      </div>
      <br />

      <div>
        <h3>Valor hora en pesos Chilenos</h3>
        <input
          type="number"
          placeholder="Valor hora"
          value={hourValue}
          required
          onChange={(e) => setHourValue(e.target.value)}
        />
      </div>
      <br />
      <div
        className="maincontainer"
        style={{
          padding: "10px",
          margin: "10px auto",
          textAlign: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <h3>Valor Final en Pesos Chilenos</h3>
        <br />
        <input
          type="number"
          placeholder="Valor Final"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            fontSize: "20px",
            border: "none",
            outline: "none",
            backgroundColor: "#4B4B4B",
            color: "#fff",
          }}
        />
      </div>
      <br />
      <div>
        <button
          id="button-skills"
          className="consolas-font"
          onClick={calculateValue}
        >
          Calcular Valor Final
        </button>
      </div>
      <button type="submit" className="consolas-font" onClick={handleSave}>
        Guardar datos
      </button>
    </div>
  );
}

export default RedactarPropuesta3;
