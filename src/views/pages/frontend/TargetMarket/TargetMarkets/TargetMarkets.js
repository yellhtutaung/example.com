import './TargetMarkets.scss';
import thailand from '../../../../../assets/images/thailand.jpg';
import singapore from '../../../../../assets/images/singapore.jpg';
import malaysia from '../../../../../assets/images/malaysia.jpg';
import TargetMarketCard from "../TargetMarketCard/TargetMarketCard";

const TargetMarkets = () => {
    return (
        <section id="market" data-aos="fade-up">
            <div className="container-fluid m-0 p-0">
                <div className="d-flex flex-wrap">

                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <TargetMarketCard data={{
                                img: thailand,
                                country: 'Thailand',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur distinctio, dolor doloremque ea eos excepturi facilis, fugit id iure magni maiores nobis perferendis quod similique temporibus unde ut voluptatum?\n'
                            }}
                        />
                    </div>

                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <TargetMarketCard data={{
                                img: singapore,
                                country: 'Singapore',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur distinctio, dolor doloremque ea eos excepturi facilis, fugit id iure magni maiores nobis perferendis quod similique temporibus unde ut voluptatum?\n'
                            }}
                        />
                    </div>

                    <div
                        className="col-md-6 col-lg-4 our_market_card_container"
                    >
                        <TargetMarketCard data={{
                                img: malaysia,
                                country: 'Malaysia',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur distinctio, dolor doloremque ea eos excepturi facilis, fugit id iure magni maiores nobis perferendis quod similique temporibus unde ut voluptatum?\n'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TargetMarkets;