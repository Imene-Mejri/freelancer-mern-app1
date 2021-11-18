import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../home/Navbar";

import Footer from "../home/Footer";
import Body from "../home/Body";
import Contact from "../home/Contact";
import Description from "../home/Description";
export default function Home() {
  /* useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/all")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []); */

  return (
    <div>
    
    <div   className="Navbar">
    <Navbar  />
       
      </div>
      <div>
        <Body />
      </div>

      <Footer />
    </div>
  );
}
