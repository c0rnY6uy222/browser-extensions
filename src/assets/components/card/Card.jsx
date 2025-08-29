import "./card.css";
import Console from "../../images/logo-console-plus.svg";
import Switch from "../switch/Switch";

const Card = () => {
  return (
    <section className="card">
      <div className="text">
        <img src={Console} />
        <div className="text-inner">
          <h1>DevLens</h1>
          <p>Quickly inspect page layouts and visualize element boundaries</p>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn-remove">Remove</button>
        <Switch />
      </div>
    </section>
  );
};

export default Card;
