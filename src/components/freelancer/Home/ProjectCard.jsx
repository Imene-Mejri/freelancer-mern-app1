import "./project.css"
import { useEffect } from 'react';
import { getHandler } from '../../../redux/action/project-action';
import { useDispatch } from "react-redux";
export default function ProjectCard({project}) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getHandler())
  },[])
  return (
  <div class="curved article">
    <h2>{project.title}</h2>
    <h5>creator: {project.creator}</h5>
    <p>desc: {project.description}</p>
    <h5>price: {project.price}DT</h5>
  </div>
    );
  }