import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import $ from 'jquery'
import 'jquery.ripples/dist/jquery.ripples-min'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import './styles/carrusel.css'

const Carrusel = () => {

    const { coders } = useContext(DataContext)
    const myCanvas = useRef(null)

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
              { coders.map((pics, index) => 
                <SwiperSlide key={index} className= 'cardContainer'> 
                  <img src={pics.url} alt={`pic${pics.id}`} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
  )
}

export default Carrusel