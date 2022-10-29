import Hero from "./components/Hero/Hero";
import AboutHero from "./components/Specifications/AboutHero";
import CalcParameters from "./components/CalcParameters/CalcParameters";
import Skills from "./components/Skills/Skills";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dataHeroGlobal, setDataHeroGlobal] = useState();
  const [hit, setHit] = useState();

  const addCalcHandler = (dataHero) =>
    setDataHeroGlobal((prevData) => dataHero);

  const hitValue = (hit) => {
    setHit((prevHit) => hit);
  };

  return (
    <div className="main">
      <Hero onHit={hitValue} />
      {dataHeroGlobal && <p className="note">Клик мыши по герою = удар</p>}
      <div className="rightSide">
        <AboutHero onAddToCalc={addCalcHandler} />
        <CalcParameters dataHeroGlobal={dataHeroGlobal} hit={hit} />
      </div>
      {dataHeroGlobal && (
        <div className="skills">
          <Skills dataHeroGlobal={dataHeroGlobal}/>
        </div>
      )}
    </div>
  );
}

export default App;
