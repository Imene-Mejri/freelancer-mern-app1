import React from "react";
import { Carousel } from "react-bootstrap";
import "./design.css";
import Description from "./Description";
import Contact from "./Contact";
import Otherdescri from "./Otherdescri";
import Navbar from "./Navbar";

export default function Desc() {
  const video1 = "https://www.youtube.com/watch?v=hHhYtZV_T9M";
  return (
    <div className="section1">
      <div className="Carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="cr  d-block w-100"
              src="./images/social.jpg"
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cr  d-block w-100"
              src="./images/pic4.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Find the perfect freelance services for your business</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" cr d-block w-100"
              src="./images/wordpress1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="section2">
        <Description /> <Contact />
      </div>
      <div className="section3">
      <Otherdescri />

      </div>

    </div>

  );
}
