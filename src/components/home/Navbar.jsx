// title  / search bar / login or register 
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import LoginModal from "../auth/loginModal";
import RegiterModal from "../auth/registerModal";


export default function Navbart() {

  const isAuth = useSelector(state => state.auth.isAuth)
  const role = useSelector(state => state.auth.user?.role)
 
  const dispatch = useDispatch()

  const history=useHistory()
 
  const authLinks = (
    <>
      <Link to="/client">
        {" "}
        <Nav.Link href="#features">Client</Nav.Link>
      </Link>
     
    </>
  );
  const adminLinks = (
    <>
      <Link to="/admin">
        {" "}
        <Nav.Link href="#features">Admin</Nav.Link>
      </Link>
     
    </>
  );
  const freelancerLinks = (
    <>
      <Link to="/freelancer">
        {" "}
        <Nav.Link href="#features">Freelancer</Nav.Link>
      </Link>
     
    </>
  );
  const visitorLinks = (
    <>
      <div className="navBtns">
        <LoginModal />
        <RegiterModal />
      </div>
    </>
  );
  function lg(x) {
    if (x==="admin") {return  adminLinks} 
    else if (x==="client")  {return authLinks}  
    else if (x==="freelancer") {return freelancerLinks}
    else {return visitorLinks}
  }

  return (
    <div>
      <Navbar  >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/freelancer-logo-png-6.png"
              width="45"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
              {lg(role)}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
