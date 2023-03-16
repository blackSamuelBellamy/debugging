import { useState, useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { NavLink } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import './styles/filtrador.css'
import mainLogo from '../assets/img/mainLogo.png'

const Filtrador = () => {

  const { filtradorDisplay, setFiltradorDisplay, setFreeCoders, coders, freeCoders } = useContext(DataContext)
  const [area, setArea] = useState(false)
  const [coder, setCoder] = useState(false)
  const [language, setLanguage] = useState(false)

  const filtradorDisplayed = () => setFiltradorDisplay(!filtradorDisplay)
  const displaying = state => state
  const filtradorArea = e => {
    const filtroArea = coders.filter(coder => coder.area.includes(e.target.dataset.value))
    setFreeCoders(filtroArea)
  }
  const filtradorNombre = e => {
    const filtroNombre = freeCoders.filter(filtro => filtro.nombre === e.target.textContent)
    setFreeCoders(filtroNombre)
  }

  const filtradorLenguaje = e => {
    const filtroLenguaje = coders.filter(coder => coder.lenguajes.includes(e.target.dataset.value))
    setFreeCoders(filtroLenguaje)
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
          <input type="text"
            name='area'
            className='boxSearchInput'
            onFocus={() => setArea(true)}
            onBlur={() => setTimeout(() => setArea(false), 220)}
          />

          <div className={displaying(area) ? 'hiddenBox filterCoderArea hidden' : 'hiddenBox filterCoderArea'}>
            <p onClick={filtradorArea} className='textoArea' data-value='front'>Front-End</p>
            <p onClick={filtradorArea} className='textoArea' data-value='back' >Back-End</p>
            <p onClick={filtradorArea} className='textoArea' data-value='full' >Full-Stack</p>
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
            {freeCoders.map((coder, index) =>
              <p className='codersName' key={index} onClick={filtradorNombre}>{coder.nombre}</p>)}
          </div>
        </div>
        <div className="inputBoxSearch inputLanguageName">
          <p className='filtroName lenguajeFiltro'>Lenguaje</p>
          <input type="text"
            name='Language'
            className='boxSearchInput'
            onFocus={() => setLanguage(true)}
            onBlur={() => setTimeout(() => setLanguage(false), 220)}
          />
          <div className={displaying(language) ? 'hiddenBox filterCoderLanguage hidden' : 'hiddenBox filterCoderLanguage'}>
            <p data-value='java' onClick={filtradorLenguaje}>Java</p>
            <p data-value='python' onClick={filtradorLenguaje}>Python</p>
            <p data-value='javascript' onClick={filtradorLenguaje}>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filtrador