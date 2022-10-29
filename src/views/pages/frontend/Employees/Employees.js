import React from 'react';
import NavLayout from "./Navbar/NavLayout";
import EmployeeBanner from './EmployeeBanner/EmployeeBanner.js';
import  OurEmployees from './OurEmployees/OurEmployees'
import OtherFooter from "../OtherFooter/OtherFooter";

const Employees= () => {
    return (
        <div>
            <NavLayout/>
            <EmployeeBanner/>
            <OurEmployees/>
            <OtherFooter/>
        </div>
    )
}

export default Employees