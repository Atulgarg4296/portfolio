
const ProjectCard = ({title,imageSrc,projectLink}) => {
  return (
    <div className=" w-56 h-80 mt-2 mx-4 bg-zinc-800 rounded-lg transition duration-300 hover:scale-105">
        <img src={imageSrc} alt={title+" logo"} className="h-32 w-48 rounded mx-4 mt-6"></img>
        <h1 className="text-white text-2xl text-center mt-14 mb-4">{title}</h1>
        
        <a href={projectLink} target="_blank" className="text-white ml-16 bg-zinc-900 px-2 py-2 rounded ">Open Now</a>
        </div>
        
  
  )
}

export default ProjectCard