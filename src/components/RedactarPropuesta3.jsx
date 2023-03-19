import { useState } from "react";

function RedactarPropuesta3() {
  const { crearPropuesta,setCrearpropuesta,setData } = useContext(DataContext) //importado de context
  const [stackOtros, setStackOtros] = useState(""); // corresponde a stack_otros
  const [alcance, setAlcance] = useState("");//alcance
  const [horasEstimadas, setHorasEstimadas] = useState("");//horas_estimadas
  const [CantidadRevisiones, setCantidadRevisiones] = useState("");//cantidad_revisiones
  const [valorFinal, setValorFinal] = useState(""); //valor_final
  const [hourValue, setHourValue] = useState("");

  const handleSave = () => {
    if (!stackOtros || !alcance || !CantidadRevisiones || !horasEstimadas || !hourValue || !valorFinal) {
      alert("Por favor completa todos los campos antes de guardar.");
      return;
    }

    const data = {
      stackOtros,
      alcance,
      hours,
      CantidadRevisiones,
      valorFinal,
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
          value={stackOtros}//stack_otros
          maxLength={50}
          required
          onChange={(e) => setStackOtros(e.target.value)}  //corresponde en base de datos propuesta_coder a stack_otros
        />
      </div>
      <br />
      <div>
        <h3>Alcance</h3>
        <textarea
          className="my-textarea"
          placeholder="Alcances, límites, aspectos no contemplados en el servicio.Ejemplo: No incluye hosting."
          value={alcance} //alcance
          maxLength={100}
          onChange={(e) => setAlcance(e.target.value)} //corresponde en base de datos propuesta_coder a alcance
        />
      </div>
      <br />

      <div>
        <h3>Cantidad de revisiones</h3>
        <input
          type="number"
          placeholder="Revisiones"
          value={CantidadRevisiones} //cantidad_revisiones
          required
          onChange={(e) => setCantidadRevisiones(e.target.value)} //corresponde en base de datos propuesta_coder a cantidad_revisiones
        />
      </div>
      <br />
      <div>
        <h3>Horas estimadas de desarrollo</h3>
        <input
          type="number"
          placeholder="Horas de desarrollo"
          value={horasEstimadas} //horas_estimadas
          required
          onChange={(e) => setHorasEstimadas(e.target.value)} //corresponde en base de datos propuesta_coder a horas_estimadas
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
          onChange={(e) => setHourValue(e.target.value)} // esta no se ocupara en el backend, se calculara en el front
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
          value={valorFinal} //valor_final
          onChange={(e) => setValorfinal(e.target.value)} //corresponde en base de datos propuesta_coder a valor_final
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