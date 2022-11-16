import './OurEmployees.scss'
import profile_1 from '../../../../../assets/images/employee_profile_1.jpg';
import profile_2 from '../../../../../assets/images/employee_profile_2.jpg';
import profile_3 from '../../../../../assets/images/employee_profile_3.jpg';
import profile_4 from '../../../../../assets/images/employee_profile_4.jpg';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import EmployeeCard from "../card/EmployeeCard";

const OurEmployees = () => {
    return (
        <div className="container-fluid m-0 p-0 py-5">

            <Swiper
                className='swiper p-5'
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                breakpoints= {{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 35,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    },
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                freeMode= {true}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                <SwiperSlide>
                    <EmployeeCard data={{ img: profile_4,
                                        profession: 'Chief Executive Officer',
                                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dicta dolorem est iste quisquam ratione rerum tenetur? Alias assumenda cum deserunt, distinctio ducimus eum nesciunt nihil quas quasi sunt.\n',
                                        name: 'Thura Moe'}}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <EmployeeCard data={{ img: profile_1,
                        profession: 'Web developer',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dicta dolorem est iste quisquam ratione rerum tenetur? Alias assumenda cum deserunt, distinctio ducimus eum nesciunt nihil quas quasi sunt.\n',
                        name: 'Aung Chan Oo'}}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <EmployeeCard data={{ img: profile_2,
                        profession: 'Android developer',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dicta dolorem est iste quisquam ratione rerum tenetur? Alias assumenda cum deserunt, distinctio ducimus eum nesciunt nihil quas quasi sunt.\n',
                        name: 'Kyaw Thet Naing'}}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <EmployeeCard data={{ img: profile_3,
                        profession: 'Graphic Designer',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dicta dolorem est iste quisquam ratione rerum tenetur? Alias assumenda cum deserunt, distinctio ducimus eum nesciunt nihil quas quasi sunt.\n',
                        name: 'Zaw Myat Aung'}}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default OurEmployees;