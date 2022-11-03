import CCTBanner from "./CCTBanner/CCTBanner";
import OtherFooter from "../reusable/OtherFooter/OtherFooter";
import ColdChainComponent from "./ColdChainComponent/ColdChainComponent";
import Transportation from "./Transportation/Transportation";
import OtherNavLayout from "../OtherNav/OtherNavLayout";
import GoToShop from "../reusable/GoToShop/GoToShop";

const ColdChainTransport = () => {
    return (
        <div>
            <GoToShop/>
            <OtherNavLayout/>
            <CCTBanner/>
            <ColdChainComponent/>
            <Transportation/>
            <OtherFooter/>
        </div>
    )
}

export default ColdChainTransport;