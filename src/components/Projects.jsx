import ProjectCard from "./ProjectCard"
import { netflix_link } from "../utils/constants"
import white_netflix from "../utils/white_netflix.png";
// import Netflix_logo from "../utils/Netflix_logo.jpg"
const Projects = () => {
  return (
    
    <div id="projects" className="mt-20 md:mt-0">
      <h1 className="text-white font-sans text-4xl font-extralight text-center mb-4">PROJECTS</h1>
    
    <div className=" min-h-96 md:mb-20 mb-10 md:flex md:justify-around grid justify-center gap-y-8">
        <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/>
        {/* <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/> */}
        {/* <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/> */}
    </div>
    </div>

  )
}

export default Projects;