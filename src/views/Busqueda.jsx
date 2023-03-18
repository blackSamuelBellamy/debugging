import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import Filtrador from '../components/Filtrador'
import '../components/styles/busqueda.css'
import { useNavigate } from 'react-router-dom'

const Busqueda = () => {

    //Navigate para busqueda de coders
    const navigate = useNavigate();
    const perfilFreecoder = (id) => {
        navigate(`/perfil/${id}`);
    }


    const {programadores } = useContext(DataContext)
    return (
        <>
            <Filtrador />
            <div className="codersWrap">
                <div className="coderContainer">
                    {programadores.map((coders, index) =>
                        <div className="coderBoxCards" key={index}>
                            <div className="single-box">
                                <div className="coderBox-content" onClick={() => perfilFreecoder(coders.id)}>
                                    <img className="sides side-1" src={coders.foto_url} alt={coders.id} />
                                    <div className="sides side-2">
                                        <div className="contentCoders">
                                            <h2>{`${coders.nombre} ${coders.apellido}`}</h2>
                                            <p>{coders.oferta_valor}</p>
                                            <div className='socials'>
                                                <AiFillGithub className='icons' />
                                                <AiFillLinkedin className='icons' />
                                                <AiFillTwitterCircle className='icons' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Busqueda