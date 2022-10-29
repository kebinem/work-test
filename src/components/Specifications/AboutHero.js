import React, { useState } from "react";
import BasicParameters from "./BasicParameters/BasicParameters";
import saveImg from "./saveImg.png";
import "./AboutHero.css";

const AboutHero = (props) => {
  // работа с данными, введёнными пользователем

  const [name, setName] = useState("");
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const [isFormVisible, setIsFormVisible] = useState(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  let dataHero = {
    name: name,
    strength,
    dexterity,
    intelligence,
    charisma,
  };

  const handleParameter1 = (e) => {
    let value = e.target.value;
    setStrength((prevState) => (dataHero.strength = value));
  };
  const handleParameter2 = (e) => {
    let value = e.target.value;
    setDexterity((prevState) => (dataHero.dexterity = value));
  };
  const handleParameter3 = (e) => {
    let value = e.target.value;
    setIntelligence((prevState) => (dataHero.intelligence = value));
  };
  const handleParameter4 = (e) => {
    let value = e.target.value;
    setCharisma((prevState) => (dataHero.charisma = value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCalc(dataHero);

    setIsFormVisible(false);
  };

  const shift = () => {
    setIsFormVisible(true);
  };

  // функция загрузки файла на сайт и его парсинг в JSON

  const uploadFile = (event) => {
    let file = event.target.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      const result = JSON.parse(reader.result);

      setName(result.name);
      setStrength(result.strength);
      setDexterity(result.dexterity);
      setIntelligence(result.intelligence);
      setCharisma(result.charisma);
    };
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form__input">
        {isFormVisible && (
          <div>
            <div className="input__hero-name">Введите имя</div>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={name}
              className="hero-name"
              autoFocus
            ></input>
          </div>
        )}
        {!isFormVisible && (
          <div>
            <div className="input__hero-name">Все зовут его:</div>
            <div className="hero-name just-name" onClick={shift}>
              {name}
            </div>
          </div>
        )}
        <div className="parameters">
          <BasicParameters
            parametr="Сила"
            handleChange={handleParameter1}
            value={strength}
          ></BasicParameters>
          <BasicParameters
            parametr="Ловкость"
            handleChange={handleParameter2}
            value={dexterity}
          ></BasicParameters>
          <BasicParameters
            parametr="Интеллект"
            handleChange={handleParameter3}
            value={intelligence}
          ></BasicParameters>
          <BasicParameters
            parametr="Харизма"
            handleChange={handleParameter4}
            value={charisma}
          ></BasicParameters>
        </div>
        {isFormVisible && (
          <button type="submit" className="save">
            создать
          </button>
        )}
        {!isFormVisible && (
          <a
            href={"data:text/json;charset=utf-8," + JSON.stringify(dataHero)}
            className="save"
            download="hero.txt"
          >
            сохранить
          </a>
        )}
      </form>
      {isFormVisible && (
        <div className="input__wrapper">
          <input
            type="file"
            name="myFile"
            onChange={uploadFile}
            id="input__file"
            className="input input__file"
          />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-wrapper">
              <img
                className="input__file-icon"
                src={saveImg}
                alt="Выбрать файл"
                width="25"
              />
            </span>
            <span className="input__file-button-text">Выберите файл</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default AboutHero;
