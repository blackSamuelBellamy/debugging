import React, { useState } from "react";

function RedactarPropuesta1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { crearPropuesta,setCrearPropuesta,setData } = useContext(DataContext) //esto se importa
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    localStorage.setItem("propuesta_titulo", event.target.value);
     //corresponde en base de datos propuesta_coder a propuesta_titulo
  };
  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    localStorage.setItem("descripcion_propuesta", event.target.value);
     //corresponde en base de datos propuesta_coder a descripcion_propuesta
  };



  
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const load = [{
      propuesta_titulo, descripcion_propuesta
    }]
    axios.post(import.meta.env.VITE_MAIN_API + /propuestacoder/ + id, load)
    .then(res => {
      localStorage.setItem('clienteToken', JSON.stringify(res.data))
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "La propuesta ha sido enviada con éxito al cliente.",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      })
    })

  return (
    <div className="maincontainer">
      <h2>Ingresa acá los detalles de tu propuesta</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título del proyecto:</label>
          <input
            type="text"
            id="title" //propuesta_titulo
            value={title} // propuesta_titulo
            onChange={handleTitleChange} //propuesta_titulo
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
                value={description} //descripcion_propuesta
                onChange={handleDescriptionChange} //descripcion_propuesta
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
}


export default RedactarPropuesta1;