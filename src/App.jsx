import About from "./Components/About"
import Banner from "./Components/Banner"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Logo from "./Components/Logo"
import Maps from "./Components/Maps"
import Navbar from "./Components/Navbar"
import Service from "./Components/Service"
import Slider from "./Components/Slider"
import Welcome from "./Components/Welcome"


function App() {

  return (
    <>
     <Header/>
     <Navbar/>
     <Banner/>
     <Welcome/>
     <Slider/>
     <Service/>
     <About/>
     <Logo/>
     <Blog/>
     <Maps/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
