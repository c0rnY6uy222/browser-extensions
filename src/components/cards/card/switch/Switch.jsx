import React, { useState } from "react";

import "./switch.css";

const Switch = ({ isActive }) => {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div
      className="switch-container"
      id={active ? "switch-active" : ""}
      onClick={() => handleClick}
    >
      <div className="switch-slider"></div>
    </div>
  );
};

export default Switch;
