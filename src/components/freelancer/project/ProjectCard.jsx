import { Card } from 'react-bootstrap';
import "./project.css"
//import { useDispatch } from "react-redux";
export default function ProjectCard({project}) {
  //const dispatch=useDispatch()

  return (
    <div className='projc'>
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{project.title}</Card.Header>
    <Card.Body>
      <Card.Title>creator: {project.creator}</Card.Title>
      <Card.Text>description : {project.description}</Card.Text>
    </Card.Body>
    </Card>
    </div>
    );
  }