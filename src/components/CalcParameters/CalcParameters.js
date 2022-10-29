import HeartImg from "./heartImg.png";
import DodgeImg from "./fastImg.png";
import EnergyImg from "./energyImg.png";
import CalcParameter from "./CalcParameter/CalcParameter";
import "./calcParameters.css";

const CalcParameters = (props) => {
  const visible = props?.dataHeroGlobal;
  const lifeStr = "жизненная сила",
    dodge = "уклонение",
    energy = "энергичность";

  return (
    <div>
      {visible && (
        <div className="calcParameters">
          <CalcParameter
            image={HeartImg}
            descripton={lifeStr}
            x={props.dataHeroGlobal?.strength}
            y={3}
            z={props.hit || 0}
          />
          <CalcParameter
            image={DodgeImg}
            descripton={dodge}
            x={props.dataHeroGlobal?.dexterity}
            y={10}
            z={0}
          />
          <CalcParameter
            image={EnergyImg}
            descripton={energy}
            x={props.dataHeroGlobal?.dexterity}
            y={props.dataHeroGlobal?.intelligence}
            z={0}
          />
        </div>
      )}
    </div>
  );
};

export default CalcParameters;
