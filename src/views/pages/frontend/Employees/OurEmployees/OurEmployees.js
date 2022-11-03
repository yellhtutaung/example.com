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

// const OurEmployees = () => {
//     return (
//         <div className="container-fluid m-0 p-0 py-5">
//             <div className="row g-2">
//                 <div
//                     className="col-md-6 col-lg-4 col-xl-3 p-3"
//                 >
//                     <div className="employee_card p-2 py-3 h-100">
//                         <div className="employee_image">
//                             <img src={profile_4} alt="" className="img-fluid mx-auto d-block" />
//                         </div>
//                         <div className="employee_info p-2 mt-3">
//                             <div className="name title-fm">
//                                 <h5 className=" title-fm text-center fw-bold">Chief Executive Officer</h5>
//                             </div>
//
//                             <div className="description body-fm text-center mt-3">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
//                                 odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
//                                 blanditiis corporis, nam ipsa ex fugiat illum eligendi.
//                             </div>
//
//                             <div className="footer title-fm text-center mt-4">
//                                 Thura Moe
//                                 <div className="title title-fm mt-2">Chief Executive Officer</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="col-md-6 col-lg-4 col-xl-3 p-3"
//                 >
//                     <div className="employee_card p-2 py-3 h-100">
//                         <div className="employee_image">
//                             <img src={profile_1} alt="" className="img-fluid mx-auto d-block" />
//                         </div>
//                         <div className="employee_info p-2 mt-3">
//                             <div className="name title-fm">
//                                 <h5 className="title-fm text-center fw-bold">Web developer</h5>
//                             </div>
//
//                             <div className="description body-fm text-center mt-3">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
//                                 odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
//                                 blanditiis corporis, nam ipsa ex fugiat illum eligendi.
//                             </div>
//
//                             <div className="footer title-fm text-center mt-4">
//                                 Aung Chan Oo
//                                 <div className="title title-fm mt-2">Web developer</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="col-md-6 col-lg-4 col-xl-3 p-3"
//                 >
//                     <div className="employee_card p-2 py-3 h-100">
//                         <div className="employee_image">
//                             <img src={profile_2} alt="" className="img-fluid mx-auto d-block" />
//                         </div>
//                         <div className="employee_info p-2 mt-3">
//                             <div className="name title-fm">
//                                 <h5 className="title-fm text-center fw-bold">Android developer</h5>
//                             </div>
//
//                             <div className="description body-fm text-center mt-3">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
//                                 odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
//                                 blanditiis corporis, nam ipsa ex fugiat illum eligendi.
//                             </div>
//
//                             <div className="footer title-fm text-center mt-4">
//                                 Kyaw Thet Naing
//                                 <div className="title title-fm mt-2">Android developer</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="col-md-6 col-lg-4 col-xl-3 p-3"
//                 >
//                     <div className="employee_card p-2 py-3 h-100">
//                         <div className="employee_image">
//                             <img src={profile_3} alt="" className="img-fluid mx-auto d-block" />
//                         </div>
//                         <div className="employee_info p-2 mt-3">
//                             <div className="name title-fm">
//                                 <h5 className="title-fm text-center fw-bold">Graphic Designer</h5>
//                             </div>
//
//                             <div className="description body-fm text-center mt-3">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis distinctio
//                                 odit, eos odio obcaecati vitae commodi nulla voluptates eius accusantium ad
//                                 blanditiis corporis, nam ipsa ex fugiat illum eligendi.
//                             </div>
//
//                             <div className="footer title-fm text-center mt-4">
//                                 Zaw Myat Aung
//                                 <div className="title title-fm mt-2">Graphic designer</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

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