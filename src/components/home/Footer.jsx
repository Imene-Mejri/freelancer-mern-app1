
import React from 'react'
import './design.css'
import { Facebook,Github,Instagram, Linkedin} from 'react-bootstrap-icons';



const Footer = () => {
    return (
      <div className="footer">
          <div className='icons'>
          <ul class="ftco-footer-social p-0">
              <li ><a href="https://www.facebook.com/" ><Facebook  /> </a></li>
              <li ><a href="https://www.instagram.com/mejrieptorkhani/" ><Instagram /> </a></li>
              <li ><a href="https://www.linkedin.com/in/imene-mejri-7798731b5/" > <Linkedin/></a></li>
              <li ><a href="https://github.com/Imene-Mejri" ><Github/> </a></li>
             
            </ul>
        </div>
        <div className="footer-copyright text-center py-3">
              <h6>
            &copy; {new Date().getFullYear()} Copyright: Made By Fares Wissem Imene
          </h6>
        </div>
        
      </div>
    );
  };
  
  export default Footer