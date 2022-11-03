import NavLayout from "../Home/Navbar/NavLayout";
import OurPartnerships from "./OurPartnerships/OurPartnerships";
import OtherFooter from "../reusable/OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";
import GoToShop from "../reusable/GoToShop/GoToShop";

const Partnerships = () => {
    return (
        <div>
            <GoToShop/>
            <OtherNavLayout/>
            <OurPartnerships/>
            <OtherFooter/>
        </div>
    )
}

export default Partnerships;