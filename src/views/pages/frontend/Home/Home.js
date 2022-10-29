import React from 'react'
import Carousel from './Carousel/Carousel'
import About from './About/About'
import Footer from './Footer/Footer'
import ItProducts from './ItProducts/ItProducts'
import NavLayout from './Navbar/NavLayout'
import OurMission from './OurMission/OurMission'
import Service from './Service/Service'

const Home = () => {
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
  )
}

export default Home