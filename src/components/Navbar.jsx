
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 text-white  w-full bg-black" >
        <div className="">
            <h1 className="text-4xl font-serif px-6 mx-28 md:mx-2">Portfolio</h1>
        </div>
        <ul className=" flex gap-x-6  px-6 text-xl font-semibold ">
            <li className="hidden md:block"><a href="#home">HOME</a></li>
            <li className="hidden md:block"><a href="#skills">SKILLS</a></li>
            <li className="hidden md:block"><a href="#projects">PROJECTS</a></li>
            <li className="hidden md:block"><a href="#footer">CONTACT</a></li>
        </ul>

    </div>
  )
}

export default Navbar