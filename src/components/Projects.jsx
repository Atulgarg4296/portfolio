import ProjectCard from "./ProjectCard"
import { netflix_link } from "../utils/constants"
import white_netflix from "../utils/white_netflix.png";
// import Netflix_logo from "../utils/Netflix_logo.jpg"
const Projects = () => {
  return (
    
    <div id="projects">
      <h1 className="text-white font-sans text-4xl font-extralight text-center mb-4">PROJECTS</h1>
    
    <div className=" h-96 mb-20 flex justify-around">
        <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/>
        {/* <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/>
        <ProjectCard title={"Netflix Clone"} imageSrc={white_netflix} projectLink={netflix_link}/> */}
    </div>
    </div>

  )
}

export default Projects;