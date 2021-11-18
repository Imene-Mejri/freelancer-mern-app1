
import "./project.css"
import { useDispatch } from "react-redux";
import { deleteHandler } from "../../../redux/action/project-action";
import { HighlightOff } from '@material-ui/icons';
export default function ProjectCard({project}) {
  const dispatch=useDispatch()

  return (
    <div class="curved article">
    <h2>{project.title}</h2>
    <h5>creator: {project.creator} || builder: {project.builder}</h5>
    <p>desc: {project.description}</p>
    <h5><span onClick={() => dispatch(deleteHandler(project._id))}><HighlightOff/></span>price: {project.price}DT</h5>
    </div>     
    );
  }