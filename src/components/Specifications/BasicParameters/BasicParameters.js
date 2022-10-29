import "./BasicParameters.css";

const BasicParameters = (props) => {
  return (
    <div className="parameter">
      <div>{props.parametr}:</div>
      <input
        className="parameters__value"
        type="number"
        value={props.value}
        onChange={props.handleChange}
        min={0}
        max={5}
      ></input>
    </div>
  );
};

export default BasicParameters;
