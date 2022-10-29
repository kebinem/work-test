import "./CalcParameter.css";

const CalcParameter = (props) => {
  const count = +props.x + +props.y - props.z;
  return (
    <div className="calcParameter">
      <img src={props.image} alt="props.descripton" />
      <h1>{props.descripton}</h1>
      <p>{count <= 0 ? 0 : count}</p>
    </div>
  );
};

export default CalcParameter;
