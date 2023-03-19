import { useState, createContext, useEffect } from "react"
import axios from "axios"
import Coders from '../coders.json'


export const DataContext = createContext()

export const States = ({ children }) => {
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        axios.get(import.meta.env.VITE_MAIN_API)
            .then(res => { 
                localStorage.setItem('programadores', JSON.stringify(res.data[0]))
                localStorage.setItem('lenguajes', JSON.stringify(res.data[1].map(x => x.nombre)))
                localStorage.setItem('basedatos', JSON.stringify(res.data[2].map(x => x.nombre)))
                localStorage.setItem('frameworks', JSON.stringify(res.data[3].map(x => x.nombre)))
                setProgramadores(JSON.parse(localStorage.getItem('programadores')))
            })
            .catch(err => console.log(err.message))
    }, [refresh])

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState(null)
    const [hamburgerDisplay, setHamburgerDisplay] = useState(false)
    const [filtradorDisplay, setFiltradorDisplay] = useState(false)
    const [coders, setCoders] = useState(Coders)
    const [freeCoders, setFreeCoders] = useState(JSON.parse(localStorage.getItem('programadores')) || '')
    const [isSaving, setIsSaving] = useState(false)
    const [programadores, setProgramadores] = useState(JSON.parse(localStorage.getItem('programadores')) || '')
    const [CrearPropuesta, setCrearPropuesta] = useState(JSON.parse(localStorage.getItem('propuesta_coder')) || '')
    const [lenguajes] = useState(JSON.parse(localStorage.getItem('lenguajes')) || '')
    const [basedatos] = useState(JSON.parse(localStorage.getItem('basedatos')) || '')
    const [frameworks] = useState(JSON.parse(localStorage.getItem('frameworks')) || '')
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedFrameworks, setSelectedFrameworks] = useState([]);
    const [selectedDatabases, setSelectedDatabases] = useState([]);
    const [portafolio, setPortafolio] = useState("");
    const [repositorio_url, setRepositorio_url] = useState("");
    const [resenha, setResenha] = useState("");
    const [oferta_valor, setOferta_valor] = useState("");
    const [foto_url, setFoto_url] = useState("");
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(null)
    const [programadoresFiltrados, setProgramadoresFiltrados] = useState(programadores);

    const allDatas = {
        correo, setCorreo, clave, setClave,
        hamburgerDisplay, setHamburgerDisplay,
        filtradorDisplay, setFiltradorDisplay,
        coders, setCoders, freeCoders, setFreeCoders,
        isSaving, setIsSaving, programadores, setProgramadores, frameworks,
        basedatos, lenguajes, selectedLanguages, setSelectedLanguages,
        selectedFrameworks, setSelectedFrameworks, selectedDatabases, setSelectedDatabases,
        portafolio, setPortafolio, repositorio_url, setRepositorio_url,
        resenha, setResenha, oferta_valor, setOferta_valor, foto_url, setFoto_url,
        data, setData, load, setLoad, setRefresh, refresh, isLoggedIn, setIsLoggedIn,
        programadoresFiltrados, setProgramadoresFiltrados, CrearPropuesta, setCrearPropuesta
    }

    return (
        <DataContext.Provider value={allDatas}>
            {children}
        </DataContext.Provider>
    )
}