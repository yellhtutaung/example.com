import thailand from "../../../../../assets/images/thailand.jpg";

const TargetMarketCard = (props) => {
    const {img, country, content} = props.data
    return (
        <div className="our_market_card">
            <div className="market_card_img">
                <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="market_card_title title-fm">
                <h5>{country}</h5>
            </div>
            <div className="market_card_body body-fm">
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default TargetMarketCard;