const FuturePlanCard = (props) => {
    const {img, country, content} = props.data
    return (
        <div className="our_future_card">
            <div className="future_card_img">
                <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="future_card_title title-fm">
                <h5>{country}</h5>
            </div>
            <div className="future_card_body body-fm">
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FuturePlanCard;