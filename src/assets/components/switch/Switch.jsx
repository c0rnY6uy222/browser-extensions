import { useRef } from "react";
import "./switch.css";

const Switch = () => {
  const switchRef = useRef(false);

  return (
    <div
      className="switch-container"
      onClick={() => {
        switchRef.current === false
          ? (switchRef.current = true)
          : (switchRef.current = false);
      }}
    >
      <div className="switch-slider"></div>
    </div>
  );
};

export default Switch;
