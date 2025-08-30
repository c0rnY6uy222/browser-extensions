import "./card.css";
import Switch from "./switch/Switch";

const Card = (props) => {
  return (
    <section className="card">
      <div className="text">
        <img src={props.logo} />
        <div className="text-inner">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn-remove">Remove</button>
        <Switch isActive={props.isActive} />
      </div>
    </section>
  );
};

export default Card;
