import {Card} from 'react-bootstrap'
import ContactF from './ContactF';
import "./freelancer.css"
export default function FreelancerCard({user}) {
  return (
  <div className='freelancerC'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.pic}  />
      <Card.Body>
        <Card.Title>{user.name} {user.lastName}</Card.Title>
        <Card.Text>{user.role}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.status}</Card.Text>
        <ContactF/>
      </Card.Body>
    </Card>
   </div>
  );
}