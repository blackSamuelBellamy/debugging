import { useContext, useEffect} from 'react'
import Spline from '@splinetool/react-spline'
import Typewriter from 'typewriter-effect'
import { DataContext } from '../hooks/DataContext'
import '../components/styles/home.css'
import Nav from '../components/Nav'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'


export default function Home() {



  const { hamburgerDisplay } = useContext(DataContext)
  
  return (
    <div className="homeContainer">
      {/* <Nav /> */}
      {hamburgerDisplay === false &&
        <div className="subtitle">
          <Typewriter
            options={{
              strings: ['¡Coders destacados!',
                'Podrás encontrar desarrolladores Front-end, Back-end y Full-stack...',
                '¡Ve a la barra de navegación para buscar a nuestros profesionales!'],
              autoStart: true,
              loop: true,
            }} />
        </div>}
      <div className="main">
        <div className="spline">
          <Spline scene="https://prod.spline.design/cWEXYurkBF7s1djN/scene.splinecode" className='splineBalls' />
        </div>
        <Carrusel />
      </div>
      <div className="homeFooter">
        <Footer />
      </div>
    </div>
  )
}
