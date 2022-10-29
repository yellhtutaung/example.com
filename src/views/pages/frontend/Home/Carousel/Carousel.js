import {  Scrollbar,  } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import './Carousel.scss'

export default function Carousel() {
  return (
    <div>
        <Swiper
          // install Swiper modules
          modules={[ Scrollbar , Autoplay]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div class="slide-container carousel-1" >
              <div class="container py-5">
                <div class="content col-md-10 col-lg-8 col-xl-7 p-2 py-5 ">
                "Eat fresh food for your health! For fresh fruits and vegetables, remember Fresh Moe! ",
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-container carousel-2" >
              <div class="container py-5">
                <div class="content col-md-10 col-lg-8 col-xl-7 p-2 py-5 ">
                "Eat fresh food for your health! For fresh fruits and vegetables, remember Fresh Moe! ",
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-container carousel-3" >
              <div class="container py-5">
                <div class="content col-md-10 col-lg-8 col-xl-7 p-2 py-5 ">
                "100% organic Fruits & Vegetables"
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-container carousel-4" >
              <div class="container py-5">
                <div class="content col-md-10 col-lg-8 col-xl-7 p-2 py-5 ">
                "Eat fresh food for your health! For fresh fruits and vegetables, remember Fresh Moe! ",
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}
