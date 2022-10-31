import React from 'react';
import './Service.scss';
import serviceImg1 from '../../../../../assets/images/service_img_1.f6724c41.jpg';
import serviceImg2 from '../../../../../assets/images/service_img_2.a0c01eb8.jpg';
import serviceImg3 from '../../../../../assets/images/service_img_3.ea841d04.jpg';


function Service() {
  return (
    <div>
        <section id="services"  data-aos="fade-up">
            <div className="container-fluid">
            <div className="center_title p-0 m-0">
                <h3 className="text-center text-dark title-fm">Our Features</h3>
                <span className="center_title_underline"></span>
                <p className="text-dark body-fm p-3 col-md-10 col-lg-8 mx-auto text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, assumenda
                    praesentium. Ea inventore velit quae dolores fugiat delectus veritatis eligendi
                    nesciunt optio ullam, consectetur natus itaque perspiciatis, quisquam unde?
                    Placeat.
                </p>
            </div>

            <div className="d-flex flex-wrap" >
                    <div className="col-md-6 col-lg-4 our_service_card_container p-2">
                        <div className="our_service_card">
                            <div className="service_card_img">
                                <img src={serviceImg1} alt="" className="img-fluid" />
                            </div>
                            <div className="service_card_title">
                                <h5>Easy To Use Application</h5>
                                <div className='service_underline'></div>
                            </div>
                            <div className="service_card_body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                    assumenda praesentium. Ea inventore velit quae dolores fugiat delectus
                                    veritatis eligendi nesciunt optio ullam, consectetur natus itaque
                                    perspiciatis, quisquam unde? Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 our_service_card_container p-2">
                        <div className="our_service_card">
                            <div className="service_card_img">
                                <img src={serviceImg2} alt="" className="img-fluid" />
                            </div>
                            <div className="service_card_title">
                                <h5>Fresh Fruits and Vegetables</h5>
                                <div className='service_underline'></div>
                            </div>
                            <div className="service_card_body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                    assumenda praesentium. Ea inventore velit quae dolores fugiat delectus
                                    veritatis eligendi nesciunt optio ullam, consectetur natus itaque
                                    perspiciatis, quisquam unde? Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 our_service_card_container p-2">
                        <div className="our_service_card">
                            <div className="service_card_img">
                                <img src={serviceImg3} alt="" className="img-fluid" />
                            </div>
                            <div className="service_card_title">
                                <h5 className="title-fm">Quick Delivery System</h5>
                                <div className='service_underline'></div>
                            </div>
                            <div className="service_card_body body-fm">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                    assumenda praesentium. Ea inventore velit quae dolores fugiat delectus
                                    veritatis eligendi nesciunt optio ullam, consectetur natus itaque
                                    perspiciatis, quisquam unde? Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service