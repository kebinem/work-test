import React, { useState } from "react";
import HeroImage from "./HeroImage.png";
import "./Hero.css";

const Hero = (props) => {
  let [hit, setHit] = useState(0);

  //счётчик ударов по персонажу

  const handleClick = () => {
    setHit(++hit);
    props.onHit(hit);
  };

  return (
    <img src={HeroImage} alt="hero" className="hero" onClick={handleClick} />
  );
};

export default Hero;
