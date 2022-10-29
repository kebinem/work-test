import React, { useState } from "react";
import "./Skill.css";

const Skill = (props) => {
  let [num, setNum] = useState(0);
  let [notif, setNotif] = useState();

  const level = ["новичок", "ученик", "адепт", "эксперт", "мастер"];

  const addNum = (event) => {
    if (numNotification < props.max) setNotif(`${level[numNotification]}`);
    setNum(++num);
  };

  const output = num < props.max ? num : props.max;
  const numNotification = num;

  return (
    <div className="scill">
      <p className="notification">{notif}</p>
      <div className="count">{props.title}</div>
      <div className="output">{output}</div>
      <button onClick={addNum}>+</button>
    </div>
  );
};

export default Skill;
