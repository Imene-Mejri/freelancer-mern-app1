import{Modal,Button,Form} from "react-bootstrap"
import { useState } from "react";
import {Add } from "@material-ui/icons";
import {useDispatch} from 'react-redux';
import { addHandler } from "../../redux/action/project-action";
export default function Addproject({}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [creator,setcreator]=useState("");
  const [title,settitle]=useState("");
  const [price,setprice]=useState("");
  const [description,setdescription]=useState("");
  const [builder,setbuilder]=useState("");
  const [projectLink,setprojectLink]=useState("");
  const [dateStart,setdateStart]=useState("");
  const [dateEnd,setdateEnd]=useState("");
  const submissionHandler=()=>{
    dispatch(addHandler({creator,builder,title, price, description, projectLink, dateStart,dateEnd}))
    setcreator('')
    settitle('')
    setprice('')
    setdescription('')
    setbuilder('')
    setprojectLink('')
    setdateStart('')
    setdateEnd('')
    handleClose()
      }
    return (
    <div>
      <div onClick={handleShow}><Add/> click me to ADD a project ... </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>ADD A PROJECT </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        
        {" "}
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Createur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of owner"
                value={creator} 
                 onChange={(e)=>setcreator(e.target.value)} 
              />
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the reciever creator "
                value={title} 
                onChange={(e)=>settitle(e.target.value)} 
              />
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter enter the starting date "
                value={price} 
                onChange={(e)=>setprice(e.target.value)} 
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="About the project ..."
                value={description} 
                onChange={(e)=>setdescription(e.target.value)} 
              />
               <Form.Label>Project_Link</Form.Label>
              <Form.Control
                type="Link"
                placeholder=" the project Link ..."
                value={projectLink} 
                onChange={(e)=>setprojectLink(e.target.value)} 
              />
               <Form.Label>Date de debut</Form.Label>
              <Form.Control
                type="date"
                placeholder=" the project Link ..."
                value={dateStart} 
                onChange={(e)=>setdateStart(e.target.value)} 
              />
               <Form.Label>Date de fin</Form.Label>
              <Form.Control
                type="date"
                placeholder=" the project Link ..."
                value={dateEnd} 
                onChange={(e)=>setdateEnd(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submissionHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }