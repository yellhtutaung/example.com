import './OtherFooterLinks.scss'
import React from "react";

const OtherFooterLinks = () => {
    return (
        <div>
            <div className="container mb-3">
                <div className="row justify-content-center">
                    <div className="col-md-12" data-aos="fade-up">
                        <div className="center_title mb-1">
                            <h3 className="text-center text-dark title-fm">Other Information</h3>
                            <span className="center_title_underline mt-1"></span>
                        </div>
                        <p className="short_text body-fm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            excepturi quos?
                        </p>
                        <div className="footer_links2 body-fm">
                            <a href='/' >Home</a>
                            <a href='/employees' >Employees</a>
                            <a href='/client' >Client and Future Plans</a>
                            <a href='/partnerships' >About Partnerships</a>
                            <a href='/target-market' >Target of Market</a>
                            <a href='/coldchain-transport' >Cold Chain and Transportation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherFooterLinks;