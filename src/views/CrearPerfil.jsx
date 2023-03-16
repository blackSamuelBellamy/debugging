import React, { useContext } from 'react';
import { DataContext } from '../hooks/DataContext';
import { Button } from 'react-bootstrap';
import CrearDatosPerfil from '../components/CrearDatosPerfil';
import CrearPortafolio from '../components/CrearPortafolio';
import CrearOfertaValor from '../components/CrearOfertaValor';
import CrearRepo from '../components/CrearRepo';
import AddSkills from '../components/AddSkills';
import Navegacion from '../components/Navegacion';

export default function CrearPerfil() {
    const { isSaving, setIsSaving } = useContext(DataContext)

    const handleSaveClick = () => {
        setIsSaving(true);
        // Save all changes here
        setTimeout(() => {
            setIsSaving(false);
        }, 2000); // simulate save operation with a 2 second delay
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