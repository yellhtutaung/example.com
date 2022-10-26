import './App.css';
import './Global.scss'
// import NavbarOverlayComponent from './Navbar/NavbarOverlayComponent';
import NavLayout from "./Navbar/NavLayout";
import Carousel from './Carousel/Carousel';
import Service from './Service/Service';
import About from './About/About';
import ItProducts from './ItProducts/ItProducts';
import OurMission from './OurMission/OurMission';
import Footer from './Footer/Footer';

const App= () =>
{
  // <NavbarOverlayComponent />

  const Website = "freshmoe.com";
  return (
      <div>
          <NavLayout/>
          <Carousel/>
          <Service/>
          <About/>
          <ItProducts/>
          <OurMission/>
          <Footer/>
      </div>
  );
}

export default App;
