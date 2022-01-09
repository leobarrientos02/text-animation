import React, { useRef, useLayoutEffect } from "react";
import image1 from "../images/hero.jpg";
import {gsap} from 'gsap';

const HeroSection = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();



    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(q(".hero-img"),
            {
                scale: 1.3,
                borderRadius: "0rem",
            },
            {
                scale: 1,
                borderRadius: "2rem",
                delay: 0.35,
                duration: 2.5,
                ease: "elastic.out(1.5,1)",
            }
        )
        .fromTo(q(".cta1"),
            {
                x: "100%",
                opacity: 0.5,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta3"),
            {
                x: "-100%",
                opacity: 0.5,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta2"),
            {
                y: "100%",
                opacity: 0.5,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta4"),
            {
                x: "100%",
                opacity: 0.5,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta6"),
            {
                x: "-100%",
                opacity: 0.5,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta5"),
            {
                y: "100%",
                opacity: 0.5,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "Power3.easeOut",
            },
            "<20%",
        )
        .fromTo(q(".cta-btn"),
            {
                y:20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            "<",
        );        
    });

  return (
      <div ref={el}>
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
            <h2><span className="cta4">to</span></h2>
            <h2><span className="cta5">perfect</span></h2>
            <h2><span className="cta6">skin.</span></h2>
          </div>
          <button className="cta-btn">Explore</button>
      </div>
      </div>
  );
};

export default HeroSection;
