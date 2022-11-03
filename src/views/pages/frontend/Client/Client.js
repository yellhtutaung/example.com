import ClientBanner from "./ClientBanner/ClientBanner";
import OurClients from "./OurClients/OurClients";
import FeaturePlans from "./FeaturePlans/FeaturePlans";
import OtherFooter from "../reusable/OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";
import GoToShop from "../reusable/GoToShop/GoToShop";

const Client = () => {
    return (
        <div>
            <GoToShop/>
            <OtherNavLayout/>
            <ClientBanner/>
            <OurClients/>
            <FeaturePlans/>
            <OtherFooter/>
        </div>
    )
}

export default Client;