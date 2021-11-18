import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react"
import Project from "./project"
import "./project.css"
import {getHandler} from '../../../redux/action/project-action'
const Freelancers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getHandler())
  }, [])
   const projects = useSelector(state => state.project.project)
    return (
      <div>
        
        <div className="projectListContainer">
          {projects?.map((project) => (
            <Project project={project} key={project._id} />
          ))}
        </div>
      </div>
    );
  }
 
export default Freelancers;