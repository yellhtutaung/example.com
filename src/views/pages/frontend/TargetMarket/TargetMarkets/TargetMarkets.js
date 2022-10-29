import './TargetMarkets.scss';
import thailand from '../../../../../assets/images/thailand.jpg';
import singapore from '../../../../../assets/images/singapore.jpg';
import malaysia from '../../../../../assets/images/malaysia.jpg';

const TargetMarkets = () => {
    return (
        <section id="market" data-aos="fade-up">
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <div className="our_market_card">
                            <div className="market_card_img">
                                <img src={thailand} alt="" className="img-fluid" />
                            </div>
                            <div className="market_card_title title-fm">
                                <h5>Thailand</h5>
                            </div>
                            <div className="market_card_body body-fm">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                    assumenda praesentium. Ea inventore velit quae dolores fugiat delectus
                                    veritatis eligendi nesciunt optio ullam, consectetur natus itaque
                                    perspiciatis, quisquam unde? Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <div className="our_market_card">
                            <div className="market_card_img">
                                <img src={singapore} alt="" className="img-fluid" />
                            </div>
                            <div className="market_card_title title-fm">
                                <h5>Singapore</h5>
                            </div>
                            <div className="market_card_body body-fm">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
                                    assumenda praesentium. Ea inventore velit quae dolores fugiat delectus
                                    veritatis eligendi nesciunt optio ullam, consectetur natus itaque
                                    perspiciatis, quisquam unde? Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <div className="our_market_card">
                            <div className="market_card_img">
                                <img src={malaysia} alt="" className="img-fluid" />
                            </div>
                            <div className="market_card_title title-fm">
                                <h5>Malaysia</h5>
                            </div>
                            <div className="market_card_body body-fm">
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
    )
}

export default TargetMarkets;