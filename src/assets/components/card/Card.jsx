// { image, title, description, active } PUT THIS LATER
// FIX EVERYTHING (IT'S MESS BRO)

import "./card.css";
import { Switch, Button } from "@mui/material";
import Console from "../../images/logo-console-plus.svg";

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
      </div>
    </section>
  );
};

export default Card;
