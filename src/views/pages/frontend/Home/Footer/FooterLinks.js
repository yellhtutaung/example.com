import React from 'react'
import './FooterLinks.scss'
import { Link } from "react-router-dom";

function FooterLinks() {
    const gotop = () => {
        window. scrollTo(0, 0)
    }
  return (
    <div>
        <div className="container mb-3">
            <div className="row justify-content-center">
                <div className="col-md-12 mb-4" data-aos="fade-up">
                    <div className="center_title mb-1">
                    <h3 className="text-center text-dark title-fm">Quick Links</h3>
                    <span className="center_title_underline mt-1"></span>
                    </div>
                    <p className="short_text body-fm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                    excepturi quos?
                    </p>
                    <div className="footer_links body-fm">
                    <a href="#services">Services</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#it_products">Website and Apps</a>
                    <a href="#mission">Our Mission</a>
                    </div>
                </div>
                <span className="green_hr_line"></span>
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
                        <Link to="/employees" onClick={gotop}>Employees</Link>
                        <Link to="/client" onClick={gotop}>Client and Future Plans</Link>
                        <Link to="/partnerships" onClick={gotop}>About Partnerships</Link>
                        <Link to="/target-market" onClick={gotop}>Target of Market</Link>
                        <Link to="/coldchain-transport" onClick={gotop}>Cold Chain and Transportation</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterLinks