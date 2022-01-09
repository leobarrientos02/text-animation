import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
const Home = () => {
  return (
    <div>
      {Nav && <Nav />}
      <HeroSection />
    </div>
  );
};

export default Home;
