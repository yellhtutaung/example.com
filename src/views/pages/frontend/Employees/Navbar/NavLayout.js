import React from 'react';
import './NavLayout.scss';
import NavBtn from './NavBtn';
import FreshmoeLogo from  '../../../../../assets/images/freshmoe_logo.png';


const NavLayout = () =>
{
  return (

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
            <a href="#services">Services</a>
            <a href="#aboutus">About Us</a>
          </li>
        </ul>
      </div>
      <img src={FreshmoeLogo} alt="Freshmoe Logo" className="main_logo img-fluid" />
      <div className="right_navigation_bar">
        <ul>
          <li>
            <a href="#it_products">Website & Apps</a>
            <a href="#mission">Our Mission</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
  )
}

export default NavLayout