import Atul_picture from "../utils/Atul_picture.jpg"
const Home = () => {
  return (
    <div id="home" className="text-white flex" >
        <div className=" w-1/2 h-screen">
            <h1 className="text-white text-6xl font-serif pl-64 pt-64">ATUL GARG</h1>
            {/* <p className="pl-56 ">About section</p> */}
            <p className="pl-64 pb-2">You can download my resume from here!</p>
            <a href="./ATUL_GARG.pdf" download="Atul's_Resume" className="ml-64 px-4  rounded py-1 gap-y-2  bg-zinc-800">Resume</a>
        </div>
        <div className=" w-1/2">
            <img src={Atul_picture} alt="Atul_Garg_picture" className="h-64 rounded-2xl w-80 mt-48 ml-16"></img>
        </div>
    </div>
  )
}

export default Home