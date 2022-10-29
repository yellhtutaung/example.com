import ClientBanner from "./ClientBanner/ClientBanner";
import NavLayout from "../Home/Navbar/NavLayout";
import OurClients from "./OurClients/OurClients";
import FeaturePlans from "./FeaturePlans/FeaturePlans";
import OtherFooter from "../OtherFooter/OtherFooter";

const Client = () => {
    return (
        <div>
            <NavLayout/>
            <ClientBanner/>
            <OurClients/>
            <FeaturePlans/>
            <OtherFooter/>
        </div>
    )
}

export default Client;