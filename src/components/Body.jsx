import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
const Body = () => {
  return (
    <div className=" min-h-screen bg-black">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Body