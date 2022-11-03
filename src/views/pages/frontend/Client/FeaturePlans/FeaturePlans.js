import './FeaturePlans.scss';
import thailand from '../../../../../assets/images/thailand.jpg';
import singapore from '../../../../../assets/images/singapore.jpg';
import malaysia from '../../../../../assets/images/malaysia.jpg';
import FuturePlanCard from "../FuturePlanCard/FuturePlanCard";

const FeaturePlans = () => {
    return (
        <section id="future" data-aos="fade-up">
                <div className="d-flex flex-wrap" >

                    <div
                        className="col-md-6 col-lg-4 our_future_card_container"
                    >
                        <FuturePlanCard data={{
                            img: thailand,
                            country: 'Thailand',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius nesciunt nisi possimus provident! Deleniti dignissimos eum incidunt officia placeat quasi voluptates. Assumenda eligendi error maiores officia quia ut vero?\n',
                            }}
                        />
                    </div>

                    <div
                        className="col-md-6 col-lg-4 our_future_card_container"
                    >
                        <FuturePlanCard data={{
                            img: singapore,
                            country: 'Singapore',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius nesciunt nisi possimus provident! Deleniti dignissimos eum incidunt officia placeat quasi voluptates. Assumenda eligendi error maiores officia quia ut vero?\n',
                            }}
                        />
                    </div>

                    <div
                        className="col-md-6 col-lg-4 our_future_card_container"
                    >
                        <FuturePlanCard data={{
                            img: malaysia,
                            country: 'Malaysia',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius nesciunt nisi possimus provident! Deleniti dignissimos eum incidunt officia placeat quasi voluptates. Assumenda eligendi error maiores officia quia ut vero?\n',
                            }}
                        />
                    </div>
                </div>
        </section>
    )
}

export default FeaturePlans;