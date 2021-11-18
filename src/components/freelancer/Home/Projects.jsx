import ProjectCard from "./ProjectCard";
//import {projects} from "../../../fake"
import "./project.css"
import {useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { getHandler } from "../../../redux/action/project-action";

 
const Projects = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHandler())
  }, [])
  
  const projects = useSelector(state => state.project.project)
  
    return ( 
        <div  >
        <ul className="projs">
        {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            )) }
        </ul>
        </div>
     );
}
export default Projects;