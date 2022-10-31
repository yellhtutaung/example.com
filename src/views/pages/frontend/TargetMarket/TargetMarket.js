import TargetMarketBanner from "./TargetMarketBanner/TargetMarketBanner";
import TargetMarkets from "./TargetMarkets/TargetMarkets";
import OtherFooter from "../OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";
import GoToShop from "../GoToShop/GoToShop";

const TargetMarket = () => {
    return (
        <div>
            <GoToShop/>
            <OtherNavLayout/>
            <TargetMarketBanner/>
            <TargetMarkets/>
            <OtherFooter/>
        </div>
    )
}

export default TargetMarket;