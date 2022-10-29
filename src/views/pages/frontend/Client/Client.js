import ClientBanner from "./ClientBanner/ClientBanner";
import OurClients from "./OurClients/OurClients";
import FeaturePlans from "./FeaturePlans/FeaturePlans";
import OtherFooter from "../OtherFooter/OtherFooter";
import OtherNavLayout from "../OtherNav/OtherNavLayout";

const Client = () => {
    return (
        <div>
            <OtherNavLayout/>
            <ClientBanner/>
            <OurClients/>
            <FeaturePlans/>
            <OtherFooter/>
        </div>
    )
}

export default Client;