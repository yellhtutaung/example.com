import TargetMarketBanner from "./TargetMarketBanner/TargetMarketBanner";
import TargetMarkets from "./TargetMarkets/TargetMarkets";
import OtherFooter from "../OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";

const TargetMarket = () => {
    return (
        <div>
            <OtherNavLayout/>
            <TargetMarketBanner/>
            <TargetMarkets/>
            <OtherFooter/>
        </div>
    )
}

export default TargetMarket;