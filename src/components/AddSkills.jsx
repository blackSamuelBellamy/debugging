import { useContext } from 'react';
import { DataContext } from '../hooks/DataContext';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';



export default function AddSkills() {
  const { lenguajes, frameworks, basedatos, setSelectedLanguages, setSelectedFrameworks,
    setSelectedDatabases, selectedDatabases, selectedFrameworks, selectedLanguages } = useContext(DataContext)


  const handleLanguageChange = (event) => {
    const language = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedLanguages([...selectedLanguages, language]);
    } else {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    }
  };

  const handleFrameworkChange = (event) => {
    const framework = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedFrameworks([...selectedFrameworks, framework]);
    } else {
      setSelectedFrameworks(selectedFrameworks.filter(fw => fw !== framework));
    }
  };

  const handleDatabaseChange = (event) => {
    const database = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedDatabases([...selectedDatabases, database]);
    } else {
      setSelectedDatabases(selectedDatabases.filter(db => db !== database));
    }
  };

  const handleSaveLanguages = () => {

    if (selectedLanguages.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona al menos un lenguaje de programación",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: "success",
        title: "Datos Guardados",
        showConfirmButton: false,
        timer: 1500,
      })
    }
  };

  const handleSaveFrameworks = () => {
    if (selectedFrameworks.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona al menos un Framework",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: "success",
        title: "Datos Guardados",
        showConfirmButton: false,
        timer: 1500,
      })
    }
  };

  const handleSaveDatabases = () => {

    if (selectedDatabases.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona al menos una opción de bases de datos",
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: "success",
        title: "Datos Guardados",
        showConfirmButton: false,
        timer: 1500,
      })
    }
  };

  return (
    <div className='maincontainer' >
      <h2>Ingresa tus skills más relevantes</h2>

      <h3>Lenguajes de programación</h3>
      {lenguajes.map(language => (
        <Form.Check
          key={language}
          type="checkbox"
          label={language}
          value={language}
          onChange={handleLanguageChange}
          checked={selectedLanguages.includes(language)}
        />
      ))}
      <Button id='button-skills' variant="primary" className="consolas-font" onClick={handleSaveLanguages}>Guardar Lenguajes</Button>

      <h3>Frameworks</h3>
      {frameworks.map(framework => (
        <Form.Check
          key={framework}
          type="checkbox"
          label={framework}
          value={framework}
          onChange={handleFrameworkChange}
          checked={selectedFrameworks.includes(framework)}
        />
      ))}
      <Button id='button-skills' variant="primary" className="consolas-font" onClick={handleSaveFrameworks}>Guardar Frameworks</Button>

      <h3>Bases de datos</h3>
      {basedatos.map(database => (
        <Form.Check
          key={database}
          type="checkbox"
          label={database}
          value={database}
          onChange={handleDatabaseChange}
          checked={selectedDatabases.includes(database)}
        />
      ))}
      <Button id='button-skills' variant="primary" className="consolas-font" onClick={handleSaveDatabases}>Guardar Bases de Datos</Button>
    </div>
  );
}