// import React from 'react';
// import './NavbarOverlayComponent.scss'
// import {Link} from "react-router-dom";

// const NavbarOverlayComponent = () =>
// {
//   const overlayClose = () => {
//     document.getElementById("navbar_overlay").style.height = "0%";
//   }

//   return (
//       <div id="navbar_overlay" className="overlay">
//         <a href="javascript:void(0)" onClick={overlayClose} className="closebtn" >&times;</a>
//         <div className="overlay-content">

//           <Link to="/">Home</Link>
//           <Link to="/employees">Employees</Link>
//           <Link to="/client">Client and Future Plans</Link>
//           <Link to="/partnerships">About Partnerships</Link>
//           <Link to="/target-market">Target of Market</Link>
//           <Link to="/coldchain-transport">Cold Chain and Transportation</Link>
//         </div>
//       </div>
//   )
// }

// export default NavbarOverlayComponent






import React from 'react';
import './NavbarOverlayComponent.scss'
import {Link} from "react-router-dom";

const NavbarOverlayComponent = () =>
{
  const overlayClose = () => {
    document.getElementById("navbar_overlay").style.height = "0%";
  }

  return (
    <div id="navbar_overlay" className="overlay">
      <a href="javascript:void(0)" onClick={overlayClose} className="closebtn" >&times;</a>
        <div className="overlay-content">

          <Link to="/">Home</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/client">Client and Future Plans</Link>
          <Link to="/partnerships">About Partnerships</Link>
          <Link to="/target-market">Target of Market</Link>
          <Link to="/coldchain-transport">Cold Chain and Transportation</Link>
        </div>
    </div>
  )
}

export default NavbarOverlayComponent