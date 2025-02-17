import Atul_picture from "../utils/Atul_picture.jpg"
const Home = () => {
  return (
    <div id="home" className="text-white flex md:h-screen h-screen" >
        <div className=" w-1/2">
            <h1 className="text-white text-6xl font-serif md:pl-64 md:pt-64 pl-32 pt-36  ">ATUL GARG</h1>
            {/* <p className="pl-56 ">About section</p> */}
            <p className="md:pl-64 md:pb-2 w-screen pl-18 mb-2 md:mb-0 ">You can download my resume from here!</p>
            <a href="./ATUL_GARG.pdf" download="Atul's_Resume" className="md:ml-64 ml-40 px-4  rounded py-1 gap-y-2   bg-zinc-800">Resume</a>
        </div>
        <div className=" w-1/2 hidden md:block">
            <img src={Atul_picture} alt="Atul_Garg_picture" className="h-64 rounded-2xl w-80 mt-48 ml-16 "></img>
        </div>
    </div>
  )
}

export default Home