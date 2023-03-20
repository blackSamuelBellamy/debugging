import React, { useState, useContext } from "react";

function RedactarPropuesta2() {
  const { crearPropuesta, setCrearPropuesta, setData } =
    useContext(DataContext);
  const [stack_1, setStack_1] = useState([]); //stack_1
  const [stack_2, setStack_2] = useState([]); //stack_2
  const [stack_3, setStack_3] = useState([]); //stack_3

  //código manejo a bd propuesta_coder stack_1 lenguages
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

    setStack_1(selectedLanguages);
    localStorage.setItem("stack_1", JSON.stringify(selectedLanguages));
    console.log("Selected Languages:", selectedLanguages);
  };

  // esto corresponde a bd propuesta_coder stack_2
  const handleFrameworksChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    if (!selectedOptions) {
      return;
    }
    console.log(event.target.selectedOptions);

    const selectedFrameworks = Array.from(
      selectedOptions,
      (option) => option.value
    );

    setStack_2(selectedFrameworks);
    localStorage.setItem("stack_2", JSON.stringify(selectedFrameworks));

    console.log("Selected Frameworks:", selectedFrameworks);
  };

  // esto corresponde a bd propuesta_coder stack_3
  const handleDatabasesChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    if (!selectedOptions) {
      return;
    }
    console.log(event.target.selectedOptions);

    const selectedDatabases = Array.from(
      selectedOptions,
      (option) => option.value
    );

    setStack_3(selectedDatabases);
    localStorage.setItem("stack_3", JSON.stringify(selectedDatabases));

    console.log("Selected Databases:", selectedDatabases);
  };

  //boton para guardar datos  en bd propuesta_coder  stack_1, stack_2, stack_3
  const handleSaveButtonClick = () => {
    if (stack_1.length === 0 || stack_3.length === 0) {
      alert("Por favor selecciona al menos un lenguaje y una base de datos");
      return;
    }
    // Save the selected data in browser memory here
    localStorage.setItem("stack_1", JSON.stringify(stack_1)); // esto es lenguaje
    localStorage.setItem("stack_2", JSON.stringify(stack_2)); // esto es framework
    localStorage.setItem("stack_3", JSON.stringify(stack_3)); // esto es base de datos
  };

  return (
    <div className="maincontainer">
      <h3>Tecnologías a utilizar</h3>
      <br />

      <div className="maincontainer-tecs">
        <div>
          <div>
            <label htmlFor="languages">Lenguajes:</label>
          </div>
          <select
            id="languages"
            multiple
            required
            onChange={handleLanguagesChange} //corresponde en base de datos propuesta_coder a stack_1
            style={{ width: "300px" }}
          >
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
            ].map((language) => (
              <option key={language} value={language}>
                {language}
              </option> //stack_1
            ))}
          </select>
        </div>
      </div>
      <br />

      <div className="maincontainer-tecs">
        <div>
          <div>
            <label htmlFor="frameworks">Frameworks:</label>
          </div>
          <select
            id="frameworks"
            multiple
            onChange={handleFrameworksChange} //corresponde en base de datos propuesta_coder a stack_2
            style={{ width: "300px" }}
          >
            {[
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
            ].map((framework) => (
              <option key={framework} value={framework}>
                {framework}
              </option> //stack_2
            ))}
          </select>
        </div>
      </div>

      <br />

      <div className="maincontainer-tecs">
        <div>
          <div>
            <label htmlFor="databases">Bases de datos:</label>
          </div>
          <select
            id="databases"
            multiple
            onChange={handleDatabasesChange} //corresponde en base de datos propuesta_coder a stack_3
            style={{ width: "300px" }}
          >
            {[
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
            ].map((database) => (
              <option key={database} value={database}>
                {database}
              </option> //stack_3
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="consolas-font"
        onClick={handleSaveButtonClick}
      >
        Guardar tecnologías
      </button>
    </div>
  );
}

export default RedactarPropuesta2;
