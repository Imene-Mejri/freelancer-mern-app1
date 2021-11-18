
import{Modal,Button, Form} from "react-bootstrap"
import { useState } from "react";
import { Message } from "@material-ui/icons";
export default function ContactF() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <div>
      {/* button that show the modal */} 
      <div onClick={handleShow}> <Message/>contact me... </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header >
          <Modal.Title><h5>Contact me ...</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        
        {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><h6>Sender</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the sender name"
              
              />
              <Form.Label><h6>receiver</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the reciever name "
               
              />
              <Form.Label><h6>Date of send</h6></Form.Label>
              <Form.Control
                type="Date"
                placeholder="Enter enter the date please "
               
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><h6>object</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="the object"
              
              />
              <Form.Text className="text-muted">
                please enter the object of the message
              </Form.Text>
                
            </Form.Group>

              <Form.Group>
              <Form.Label><h6>message</h6></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your message here please"
               
              />
              
            </Form.Group>

            
          </Form>
        
   


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }