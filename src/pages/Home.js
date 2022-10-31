import React from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/image-home.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import home4 from "../assets/images/home4.jpg";
import NavbarMobile from "../components/NavbarMobile";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <Navbar />
        <div className="info-home">
          <h3>ernestdivine31 assignment</h3>
          <p>
           <b>
            IF CHILDREN DRAWINGS WERE LIVING CREATURES
           </b>
          </p>
          <div className="home-img"> 
          <img id="home" src={home} alt="home" /> 
          <img id="home2" src={home2} alt="home" />
          <img id="home3" src={home3} alt="home" />
          <img id="home4" src={home4} alt="home" />
          </div>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
      </div>
  );
};

export default Home;
