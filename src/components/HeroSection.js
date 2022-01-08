import React from "react";
import image1 from "../images/hero.jpg";

const HeroSection = () => {
  return (
      <>
      <div className="hero-section">
          <img src={ image1 } className="hero-img" alt="IMAGE1" />
      </div>
      <div className="cta">
          <div className="cta-text">  
            <h2><span className="cta1">One</span></h2>
            <h2><span className="cta2">stop</span></h2>
            <h2><span className="cta3">shop</span></h2>
          </div>
          <div className="cta-text">  
            <h2><span className="cta4">One</span></h2>
            <h2><span className="cta5">stop</span></h2>
            <h2><span className="cta6">shop</span></h2>
          </div>
          <button className="cta-btn">Explore</button>
      </div>
      </>
  );
};

export default HeroSection;
