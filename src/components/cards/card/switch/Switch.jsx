import React, { useState } from "react";

const Switch = ({ isActive }) => {
  const [active, setActive] = useState(isActive);

  const handleChange = () => {
    setActive(!active);
  };

  return (
    <div className="switch-container">
      <div className="switch-slider"></div>
      <input type="checkbox" onChange={() => handleChange} />
    </div>
  );
};

export default Switch;
