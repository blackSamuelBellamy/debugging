import React, { useState } from "react";

function RedactarPropuesta1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // save data in browser memory
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
  };

  return (
    <div className="maincontainer">
      <h2>Ingresa acá los detalles de tu propuesta</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título del proyecto:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Título del proyecto, tope de 50 caracteres"
            required
            maxLength={50}
          />
        </div>
        <div>
          <br />
          <div>
            <label htmlFor="description">Descripción del proyecto:</label>

            <div>
              <br />
              <textarea
                id="description"
                className="my-textarea"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Descripción detallada de aspectos funcionales"
                required
                maxLength={1000}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="consolas-font">
          Guardar datos
        </button>
      </form>
    </div>
  );
}

export default RedactarPropuesta1;
