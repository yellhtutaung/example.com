import CCTBanner from "./CCTBanner/CCTBanner";
import OtherFooter from "../OtherFooter/OtherFooter";
import ColdChainComponent from "./ColdChainComponent/ColdChainComponent";
import Transportation from "./Transportation/Transportation";
import OtherNavLayout from "../OtherNav/OtherNavLayout";

const ColdChainTransport = () => {
    return (
        <div>
            <OtherNavLayout/>
            <CCTBanner/>
            <ColdChainComponent/>
            <Transportation/>
            <OtherFooter/>
        </div>
    )
}

export default ColdChainTransport;