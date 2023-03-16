import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const languages = ['Python', 'JavaScript', 'Java', 'C++', 'PHP', 'C#', 'Swift', 'TypeScript', 'Kotlin', 'Go'];
const frameworks = ['React', 'Angular', 'Vue.js', 'Ruby on Rails', 'Django', 'Spring', 'Express.js', 'Laravel', 'Flask', 'ASP.NET'];
const databases = ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Microsoft SQL Server', 'SQLite', 'Cassandra', 'Redis', 'Firebase Realtime Database', 'Amazon Aurora'];

export default function AddSkills() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [selectedDatabases, setSelectedDatabases] = useState([]);

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
      alert("Por favor selecciona al menos un lenguaje de programación");
      return;
    }
    console.log(selectedLanguages);
    // Your code to save selected languages goes here
  };

  const handleSaveFrameworks = () => {
    if (selectedFrameworks.length === 0) {
      alert("Por favor selecciona al menos un Framework");
      return;
    }

    console.log(selectedFrameworks);

    // Your code to save selected frameworks goes here
  };

  const handleSaveDatabases = () => {

    if (selectedDatabases.length === 0) {
      alert("Por favor selecciona al menos una opción de bases de datos");
      return;
    }


    console.log(selectedDatabases);
    // Your code to save selected databases goes here
  };

  return (
    <div className='maincontainer' >
      <h2>Ingresa tus skills más relevantes</h2>

      <h3>Lenguajes de programación</h3>
      {languages.map(language => (
        <Form.Check
          key={language}
          type="checkbox"
          label={language}
          value={language}
          onChange={handleLanguageChange}
          checked={selectedLanguages.includes(language)}
        />
      ))}
      <Button  id='button-skills' variant="primary" className="consolas-font" onClick={handleSaveLanguages}>Guardar Lenguajes</Button>

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
      {databases.map(database => (
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