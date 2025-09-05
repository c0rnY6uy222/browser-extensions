import Switch from "./switch/Switch";

const Card = (props) => {
  return (
    <section className="card">
      <div className="card-top">
        <img src={props.logo} />
        <div className="card-text">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="card-bottom">
        <button className="card-remove-btn">Remove</button>
        <Switch isActive={props.isActive} />
      </div>
    </section>
  );
};

export default Card;
