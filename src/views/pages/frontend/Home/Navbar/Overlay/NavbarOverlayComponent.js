import React from 'react';
import './NavbarOverlayComponent.scss'

const NavbarOverlayComponent = () =>
{
  const overlayClose = () => {
    document.getElementById("navbar_overlay").style.height = "0%";
  }

  return (
    <div id="navbar_overlay" className="overlay">
      <a href="javascript:void(0)" onClick={overlayClose} className="closebtn" >&times;</a>
        <div className="overlay-content">
          <a href='/' >Home</a>
          <a href='/employees' >Employees</a>
          <a href='/client' >Client and Future Plans</a>
          <a href='/partnerships' >About Partnerships</a>
          <a href='/target-market' >Target of Market</a>
          <a href='/coldchain-transport' >Cold Chain and Transportation</a>
        </div>
    </div>
  )
}

export default NavbarOverlayComponent