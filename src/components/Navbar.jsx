
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 text-white  w-full bg-black" >
        <div className="">
            <h1 className="text-4xl font-serif px-6">Portfolio</h1>
        </div>
        <ul className=" flex gap-x-6  px-6 text-xl font-semibold ">
            <li><a href="#home">HOME</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#footer">CONTACT</a></li>
        </ul>

    </div>
  )
}

export default Navbar