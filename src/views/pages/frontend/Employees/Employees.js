import React from 'react';
import EmployeeBanner from './EmployeeBanner/EmployeeBanner.js';
import  OurEmployees from './OurEmployees/OurEmployees'
import OtherFooter from "../reusable/OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";
import GoToShop from "../reusable/GoToShop/GoToShop";

const Employees= () => {
    return (
        <div>
            <GoToShop/>
            <OtherNavLayout/>
            <EmployeeBanner/>
            <OurEmployees/>
            <OtherFooter/>
        </div>
    )
}

export default Employees