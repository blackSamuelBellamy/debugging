import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery'
import 'jquery.ripples/dist/jquery.ripples-min'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import './styles/carrusel.css'

const Carrusel = () => {

    const {programadores} = useContext(DataContext)
    const myCanvas = useRef(null)
    const Navigate = useNavigate()
    const handleClick = e => {
      const id = e.target.alt
      Navigate('/perfil/' + id)
    }
  
    useEffect(() => {
        $(myCanvas.current).ripples({
            resolution: 512,
            dropRadius: 50,
            perturbance: .1
        })
    })
  return (
    <div className="gallery" ref={myCanvas}>
          <h2 className='codersTitle'>no show</h2>
          <div className="swiperContenedor">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              observer={true}
              loop={true}
              coverflowEffect={{
                rotate: 36,
                stretch: 55,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {programadores && programadores.map((pics, index) => 
                <SwiperSlide key={index} className= 'cardContainer' onClick={handleClick}> 
                  <img src={pics.foto_url} alt={pics.id} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
  )
}

export default Carrusel