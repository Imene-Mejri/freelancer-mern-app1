import ProjectCard from "./ProjectCard";
//import {projects} from "../../../fake"
import {useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { getHandler } from "../../../redux/action/project-action";
const Projects = ({}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHandler())
  }, [])
  const projects = useSelector(state => state.project.project)
  const user = useSelector(state => state.auth.user)
    return ( 
        <div  >
        <ul className="projs">{
          projects && (projects?.filter( (p) => p.builder==user?.name).map((p) => (
            /*&& (projects.filter( (p) => p.creator==user?.name)*/
            <ProjectCard key={p._id} project={p} />
          )))}
        </ul>
        </div>
     );
}
export default Projects;