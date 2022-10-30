import React from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/image-home.jpg";
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
            <img src={home} alt="home" />
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
