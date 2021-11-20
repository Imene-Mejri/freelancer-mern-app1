import{Modal,Button,Form} from "react-bootstrap"
import { useState } from "react";
import { Add} from "@material-ui/icons";
import {useDispatch} from 'react-redux'
import { addInnvoice } from "../../../redux/action/innvoiceClient-action";

export default function AddInnvoice({}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sender,setsender]=useState("");
  const [receiver,setreceiver]=useState("");
  const [dateSent,setdateSent]=useState("");
  const [object,setobject]=useState("");
  const [message,setmessage]=useState("");
  
  const submissionHandler=()=>{
    dispatch(addInnvoice({sender,receiver,dateSent, object,message}))
    setsender('')
    setreceiver('')
    setdateSent('')
    setobject('')
    setmessage('')
   
      }
    return (
    <div>
      <div onClick={handleShow}><Add/> click me to ADD Innvoice ....</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><h5>Add Innvoice</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        
        {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the sender name"
                value={sender} 
                 onChange={(e)=>setsender(e.target.value)} 
              />
              <Form.Label>receiver</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the reciever name "
                value={receiver} 
                onChange={(e)=>setreceiver(e.target.value)} 
              />
              <Form.Label>Date of send</Form.Label>
              <Form.Control
                type="Date"
                placeholder="Enter enter the date please "
                value={dateSent} 
                onChange={(e)=>setdateSent(e.target.value)} 
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>object</Form.Label>
              <Form.Control
                type="text"
                placeholder="the object"
                value={object} 
                onChange={(e)=>setobject(e.target.value)} 
              />
                
            </Form.Group>

              <Form.Group>
              <Form.Label>message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your message here please"
                value={message} 
                onChange={(e)=>setmessage(e.target.value)} 
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