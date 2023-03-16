import React, { useState } from "react";

function RedactarPropuesta2() {
  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [databases, setDatabases] = useState([]);

  const handleLanguagesChange = (event) => {
    const selectedLanguages = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setLanguages(selectedLanguages);
  };

  const handleFrameworksChange = (event) => {
    const selectedFrameworks = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFrameworks(selectedFrameworks);
  };

  const handleDatabasesChange = (event) => {
    const selectedDatabases = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setDatabases(selectedDatabases);
  };

  const handleSaveButtonClick = () => {
    if (languages.length === 0 || databases.length === 0) {
      alert("Por favor selecciona al menos un lenguaje y una base de datos");
      return;
    }


    // Save the selected data in browser memory here
    console.log("Selected Languages:", languages);
    console.log("Selected Frameworks:", frameworks);
    console.log("Selected Databases:", databases);
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
            onChange={handleLanguagesChange}
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
              </option>
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
          onChange={handleFrameworksChange}
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
            </option>
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
          onChange={handleDatabasesChange}
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
            </option>
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
