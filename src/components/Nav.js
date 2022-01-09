import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Nav = () => {

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(q(".letter1"),
            {
                y: "100%",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "back.out(3)",
            }
        )
        .fromTo(q(".letter2"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )
        .fromTo(q(".letter3"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )
        .fromTo(q(".letter4"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )                
        .fromTo(q(".letter5"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )
        .fromTo(q(".letter6"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
        },
        "<20%",
        )
        .fromTo(q(".letter7"),
        {
            y: "100%",
            opacity: 0,
            ease: "back.out(3)",
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )
        .fromTo(q(".letter8"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )
        .fromTo(q(".letter9"),
        {
            y: "100%",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(3)",
        },
        "<20%",
        )                
    });

  return (
    <nav ref={el}>
        <h1 className="logo">
            <span className="letter1">S</span>
            <span className="letter2">k</span>
            <span className="letter3">i</span>
            <span className="letter4">n</span>
            <span className="letter5">c</span>
            <span className="letter6">a</span>
            <span className="letter7">r</span>
            <span className="letter8">e</span>
            <span className="letter9">.</span>
        </h1>
    </nav>
  );
};

export default Nav;
