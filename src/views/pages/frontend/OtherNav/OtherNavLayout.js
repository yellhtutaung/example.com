import React from 'react';
import './OtherNavLayout.scss';
import NavBtn from './OtherNavBtn';
import FreshmoeLogo from  '../../../../assets/images/freshmoe_logo.png';
import NavbarOverlayComponent from "./Overlay/NavbarOverlayComponent";


const OtherNavLayout = () =>
{
    return (
        <div>
            <NavbarOverlayComponent/>
            <section id="top_brand_bar">
                <div className="green_block"></div>
                <div className="white_block"></div>
                <div className="red_block"></div>
                <nav className="navigation_bar mobile">
                    <div className="mobile_menu_icon">
                        <NavBtn />
                    </div>
                    <div>
                        <img src={FreshmoeLogo} alt="Freshmoe Logo" className="main_logo img-fluid" />
                    </div>
                </nav>
                <nav className="navigation_bar web">
                    <div className="left_navigation_bar">
                        <ul>
                            <li>
                                <NavBtn />
                                <a href="/"> Home</a>

                            </li>
                        </ul>
                    </div>
                    <img src={FreshmoeLogo} alt="Freshmoe Logo" className="main_logo img-fluid" />
                    <div className="right_navigation_bar">

                    </div>
                </nav>
            </section>
        </div>

    )
}

export default OtherNavLayout