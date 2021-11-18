import ProjectCard from "./ProjectCard";
import {projects} from "../../../fake"
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
            <h1>projects :</h1>
          <ul className="projs">{
            projects.map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </ul>
          </div>
       );
  }
  export default Projects;