import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from 'swiper/modules'
import testimonials from "../testimonials.json"
import "./Testimonials.css"
import "swiper/css"
import 'swiper/css/effect-coverflow'

export default function Testimonials() {
    return (
        <section className="testimonials">
            <h2> What they´ve said </h2> 
            <div className="slider">
                <Swiper
                    slideToClickedSlide={true}
                    initialSlide={1}
                    slidesPerView={1}
                    effect={'coverflow'}
                    centeredSlides={true}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 80,
                      depth: 300,
                      modifier: 1,
                      slideShadows: false
                    }}
                    modules={[EffectCoverflow]}
                    className="swiper"
                    breakpoints={{
                        900:{
                            slidesPerView: 3
                        }
                    }}
                >
                    {testimonials.map(({ id, image, name, text }) => {
                        return (
                            <SwiperSlide key={id} className="swiper-slide">
                                <Card key={id} image={image} name={name} text={text}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <button className="get-started">
                Get Started
            </button>
        </section>
    )
}

function Card({ image, name, text }) {
    return (
        <div className="card">
            <img src={image} alt={`${name} avatar`} />
            <h3> {name} </h3>
            <p> {text} </p>
        </div>
    )
}