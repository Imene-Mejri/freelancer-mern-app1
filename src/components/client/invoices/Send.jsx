import{Modal,Button,Form} from "react-bootstrap"
import { useState } from "react";
import { Send} from "@material-ui/icons";
import {useDispatch} from 'react-redux'
import { sendInnvoice} from "../../../redux/action/innvoiceClient-action";

export default function SendInnvoice({}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [freeID,setfreeID]=useState("");

  
  const submissionHandler=()=>{
    dispatch(sendInnvoice({freeID}))
    setfreeID('')
      }
    return (
    <div>
      <div onClick={handleShow}><Send/> </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><h5>Send Innvoice </h5></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        
        {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Receiver :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the freelancer id"
                value={freeID} 
                 onChange={(e)=>setfreeID(e.target.value)} 
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