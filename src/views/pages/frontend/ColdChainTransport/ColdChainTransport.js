import CCTBanner from "./CCTBanner/CCTBanner";
import NavLayout from "../Home/Navbar/NavLayout";
import OtherFooter from "../OtherFooter/OtherFooter";
import ColdChainComponent from "./ColdChainComponent/ColdChainComponent";
import Transportation from "./Transportation/Transportation";

const ColdChainTransport = () => {
    return (
        <div>
            <NavLayout/>
            <CCTBanner/>
            <ColdChainComponent/>
            <Transportation/>
            <OtherFooter/>
        </div>
    )
}

export default ColdChainTransport;