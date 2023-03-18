import React, { useContext } from 'react';
import { DataContext } from '../hooks/DataContext';
import { Button } from 'react-bootstrap';
import CrearDatosPerfil from '../components/CrearDatosPerfil';
import CrearPortafolio from '../components/CrearPortafolio';
import CrearOfertaValor from '../components/CrearOfertaValor';
import CrearRepo from '../components/CrearRepo';
import AddSkills from '../components/AddSkills';
import Navegacion from '../components/Navegacion';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CrearPerfil() {
    const { isSaving, setIsSaving } = useContext(DataContext)
    const { load, setLoad, setRefresh, refresh} = useContext(DataContext)

    const Navigate = useNavigate()
    const handleSaveClick = () => {
        if (load === null) {
            Swal.fire({
                icon: 'error',
                title: 'Debes Llenar todo el formulario',
                showConfirmButton: false,
                timer: 1500
            })
        } else {

            axios.post(import.meta.env.VITE_MAIN_API + '/crearperfil', load)
                .then(res => {
                    if(res.data.includes('Este correo electrónico ya está registrado')) {
                        Swal.fire({
                            icon: 'error',
                            title: res.data,
                            showConfirmButton: false,
                            timer: 1500
                        })

                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: res.data,
                            showConfirmButton: false,
                            timer: 1500
                        }) 
                        setRefresh(!refresh)                
                        setTimeout(() => Navigate('/home'), 2500)
                        setLoad(null)
                    }
                }).catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: err.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            setIsSaving(true);
            setTimeout(() => setIsSaving(false), 2000)
        }

    };

    return (

        <div className='maincontainer' >
            {/* <Navegacion /> */}
            <div>
                <CrearDatosPerfil />
            </div>
            <div>
                <AddSkills />
            </div>
            <div>
                <CrearPortafolio />
            </div>
            <div>
                <CrearRepo />
            </div>
            <div>
                <CrearOfertaValor />
            </div>
            <div className="text-center mt-4" >
                <Button id='button-crearperfil' className="consolas-font" onClick={handleSaveClick} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Guardar todos los cambios'}
                </Button>
            </div>
        </div>

    );
}