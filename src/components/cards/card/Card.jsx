import "./card.css";

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
        <input
          type="checkbox"
          className="switch-input"
          id={`switchBtn${props.num}`}
          defaultChecked={props.isActive}
        />
        <label htmlFor={`switchBtn${props.num}`} className="switch-container">
          <div className="switch-slider"></div>
        </label>
      </div>
    </section>
  );
};

export default Card;
