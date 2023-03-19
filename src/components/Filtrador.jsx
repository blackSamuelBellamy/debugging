import { useState, useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import './styles/filtrador.css'

const Filtrador = () => {

  const { filtradorDisplay, setFiltradorDisplay, programadoresFiltrados, setProgramadoresFiltrados, programadores } = useContext(DataContext)

  const [area, setArea] = useState(false);
  const [coder, setCoder] = useState(false);
  const [language, setLanguage] = useState(false);

  const filtradorDisplayed = () => setFiltradorDisplay(!filtradorDisplay);
  const displaying = state => state;
  const filtradorArea = (e) => {
    const filtroArea = programadoresFiltrados.filter(coder => coder.area.includes(e.target.dataset.value))
    setProgramadoresFiltrados(filtroArea)
  }
  const filtradorNombre = (e) => {
    const filtroNombre = programadoresFiltrados.filter(filtro => filtro.nombre === e.target.textContent)
    setProgramadoresFiltrados(filtroNombre)
  }

  const filtradorLenguaje = (e) => {
    const filtroLenguaje = programadoresFiltrados.filter(coder => coder.lenguajes.includes(e.target.dataset.value))
    setProgramadoresFiltrados(filtroLenguaje)
  }

  const resetFiltrador = () => {
    setProgramadoresFiltrados(programadores);
  }

  return (
    <div className='filtrador'>
      <button onClick={filtradorDisplayed} className={filtradorDisplay ? 'filtradorHamburger filtradorCruz' : 'filtradorHamburger'}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={filtradorDisplay ? "menuBusqueda busquedaResponsive" : "menuBusqueda"} >
        <div className="inputBoxSearch inputAreaName">
          <p className='filtroName areaFiltro'>Area</p>
          <input
            type="text"
            name='area'
            className='boxSearchInput'
            onFocus={() => setArea(true)}
            onBlur={() => setTimeout(() => setArea(false), 220)}
          />

          <div className={displaying(area) ? 'hiddenBox filterCoderArea hidden' : 'hiddenBox filterCoderArea'}>
            <p onClick={filtradorArea} className='textoArea' data-value='Frontend'>Front-End</p>
            <p onClick={filtradorArea} className='textoArea' data-value='Backend' >Back-End</p>
            <p onClick={filtradorArea} className='textoArea' data-value='Fullstack' >Full-Stack</p>
          </div>
        </div>
        <div className="inputBoxSearch inputCoderName">
          <p className='filtroName nombreFiltro'>Nombre</p>
          <input
            type="text"
            name='Coder'
            className='boxSearchInput'
            onFocus={() => setCoder(true)}
            onBlur={() => setTimeout(() => setCoder(false), 220)}
          />
          <div className={displaying(coder) ? 'hiddenBox filterCoderName hidden' : 'hiddenBox filterCoderName'}>
            {programadoresFiltrados.map((coder, index) =>
              <p className='codersName' key={index} onClick={filtradorNombre}>{coder.nombre}</p>)}
          </div>
        </div>
        <div className="inputBoxSearch inputLanguageName">
          <p className='filtroName lenguajeFiltro'>Lenguaje</p>
          <input
            type="text"
            name='Language'
            className='boxSearchInput'
            onFocus={() => setLanguage(true)}
            onBlur={() => setTimeout(() => setLanguage(false), 220)}
          />
          <div className={displaying(language) ? 'hiddenBox filterCoderLanguage hidden' : 'hiddenBox filterCoderLanguage'}>
            <p data-value='Java' onClick={filtradorLenguaje}>Java</p>
            <p data-value='Python' onClick={filtradorLenguaje}>Python</p>
            <p data-value='JavaScript' onClick={filtradorLenguaje}>JavaScript</p>
          </div>
        </div>
        <button className='boton' onClick={resetFiltrador}>
          Limpiar
        </button>
      </div>
    </div>
  )
}

export default Filtrador