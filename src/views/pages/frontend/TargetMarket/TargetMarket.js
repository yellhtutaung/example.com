import NavLayout from "../Home/Navbar/NavLayout";
import TargetMarketBanner from "./TargetMarketBanner/TargetMarketBanner";
import TargetMarkets from "./TargetMarkets/TargetMarkets";
import OtherFooter from "../OtherFooter/OtherFooter";

const TargetMarket = () => {
    return (
        <div>
            <NavLayout/>
            <TargetMarketBanner/>
            <TargetMarkets/>
            <OtherFooter/>
        </div>
    )
}

export default TargetMarket;