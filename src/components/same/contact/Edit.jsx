import { useState } from "react";
import {Button, Modal,Form} from "react-bootstrap"
import {Edit} from "@material-ui/icons"
import { useDispatch,useSelector } from "react-redux";
import { updateProfile } from "../../../redux/action/Users-action";
const Editp = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [name, setName] = useState(user.name);
  const [lastName,setLastname] = useState(user.lastName)
  const submissionHandler=()=>{
    dispatch(updateProfile(user._id,{name,lastName}))
    
    handleClose()
      }
    return ( 
        <div>
            <div onClick={handleShow}><Edit/> : edit your profile !</div> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                <Modal.Title>Edit your profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>

          <Form>
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
              
              />
              <Form.Label>new Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name "
                value={lastName} 
                onChange={(e)=>setLastname(e.target.value)} 
                
              />

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
 
export default Editp;