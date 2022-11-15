import './OtherFooter.scss'
import OtherFooterFooterLinks from "./OtherFooterLinks";
import ContactForm from "../../Home/Footer/ContactForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";


const OtherFooter = () => {
    return (

        <div>
            <section id="footer">
                <div className="container-fluid">
                    <div className="d-flex flex-wrap footer_section_1">
                        <div className="col-md-6 border_right">
                            <OtherFooterFooterLinks />
                        </div>
                        <div className="col-md-6 border_right">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="socials body-fm">
                    <p className="text-center">Phone: 091234567</p>
                    <h5 className="text-center my-1">Follow Us</h5>
                    <div className="d-flex justify-content-center my-1">
                        <a href="/src/views/pages" className="social_icon">
                            <FacebookIcon/>
                        </a>
                        <a href="/src/views/pages" className="social_icon">
                            <TwitterIcon/>
                        </a>
                        <a href="/src/views/pages" className="social_icon">
                            <InstagramIcon/>
                        </a>
                        <a href="/src/views/pages" className="social_icon">
                            <YouTubeIcon/>
                        </a>
                        <a href="/src/views/pages" className="social_icon">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default OtherFooter;
