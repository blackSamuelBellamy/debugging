import { useState, createContext, useEffect } from "react"
import axios from "axios"
import Coders from '../coders.json'


export const DataContext = createContext()

export const States = ({ children }) => {

    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState(null)
    const [hamburgerDisplay, setHamburgerDisplay] = useState(false)
    const [filtradorDisplay, setFiltradorDisplay] = useState(false)
    const [coders, setCoders] = useState(Coders)
    const [freeCoders, setFreeCoders] = useState(Coders)
    const [isSaving, setIsSaving] = useState(false)
    const [programadores, setProgramadores] = useState('')
    const [frameworks, setFrameWorks] = useState('')
    const [basedatos, setBasedatos] = useState('')
    const [lenguajes, setLenguajes] = useState('')

   useEffect(() => {
     axios.get('http://localhost:3600')
     .then( res => {        
        setProgramadores(res.data.programadores)
        setFrameWorks(res.data.frameworks)
        setBasedatos(res.data.basedatos)
        setLenguajes(res.data.lenguajes)
     })
     .catch(err => console.log(err.message))
   }, [])

    const allDatas = {
        correo, setCorreo, clave, setClave,
            hamburgerDisplay, setHamburgerDisplay,
        filtradorDisplay, setFiltradorDisplay,
        coders, setCoders, freeCoders, setFreeCoders,
        isSaving, setIsSaving, programadores, frameworks,
        basedatos, lenguajes
    }

    return (
        <DataContext.Provider value={allDatas}>
            {children}
        </DataContext.Provider>
    )
}