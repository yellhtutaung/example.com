import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Global.scss'
import Employees from './Employees/Employees';
import Client from "./Client/Client";
import Partnerships from "./Partnerships/Partnerships";
import TargetMarket from "./TargetMarket/TargetMarket";
import ColdChainTransport from "./ColdChainTransport/ColdChainTransport";
import Home from './Home/Home';
// import NavbarOverlayComponent from './Navbar/NavbarOverlayComponent';


const App= () =>
{
  // <NavbarOverlayComponent />

  const Website = "freshmoe.com";
  return (
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/client" element={<Client/>}/>
                <Route path='/partnerships' element={<Partnerships/>} />
                <Route path='/target-market' element={<TargetMarket/>} />
                <Route path='/coldchain-transport' element={<ColdChainTransport/>} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
