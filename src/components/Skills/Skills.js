import Skill from "./Skill/Skill";
import "./Skills.css";

const Skills = (props) => {
  const title = [
    { name: "Атака", max: props.dataHeroGlobal.strength },
    { name: "Стелс", max: props.dataHeroGlobal.dexterity },
    { name: "Стрельба из лука", max: props.dataHeroGlobal.dexterity },
    { name: "Обучаемость", max: props.dataHeroGlobal.intelligence },
    { name: "Выживание", max: props.dataHeroGlobal.intelligence },
    { name: "Медицина", max: props.dataHeroGlobal.intelligence },
    { name: "Запугивание", max: props.dataHeroGlobal.charisma },
    { name: "Проницательность", max: props.dataHeroGlobal.charisma },
    { name: "Внешний вид", max: props.dataHeroGlobal.charisma },
    { name: "Манипулирование", max: props.dataHeroGlobal.charisma },
  ];

  return (
    <div>
      <h1>Skills</h1>
      <div className="scillsList">
        {title.map((word) => (
          <Skill title={word.name} key={word.name} max={word.max}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
