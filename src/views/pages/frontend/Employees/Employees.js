import React from 'react';
import NavLayout from "./Navbar/NavLayout";
import EmployeeBanner from './EmployeeBanner/EmployeeBanner.js';
import  OurEmployees from './OurEmployees/OurEmployees'
import OtherFooter from "../OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";

const Employees= () => {
    return (
        <div>
            <OtherNavLayout/>
            <EmployeeBanner/>
            <OurEmployees/>
            <OtherFooter/>
        </div>
    )
}

export default Employees