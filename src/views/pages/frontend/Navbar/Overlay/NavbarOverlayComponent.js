import React from 'react';

const NavbarOverlayComponent = () 
{
  return (
    <div id="navbar_overlay" className="overlay">
      <a href="javascript:void(0)" className="closebtn" >&times;</a>
        <div className="overlay-content">
          <p>Home</p>
          <p>Employees</p>
          <p>Target of Market</p>
          <p>About Partnerships</p>
          <p>Client and Future Plans</p>
          <p>Cold Chains and Transportation</p>
        </div>
    </div>
  )
}

export default NavbarOverlayComponent