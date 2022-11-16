import React from 'react';
import './OtherNavBtn.scss';
import MenuIcon from '@mui/icons-material/Menu';
const NavBtn = () =>
{
    const overlayOpen = () => {
        console.log(window.location.pathname)
        document.getElementById("navbar_overlay").style.height = "100%";
    }
    return (
        <a href="javascript:void(0)" onClick={overlayOpen} className="menu_button"><MenuIcon/></a>
    )
}

export default NavBtn