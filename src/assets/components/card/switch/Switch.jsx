import "./switch.css";

const Switch = (props) => {
  return (
    <div
      className="switch-container"
      style={{
        background: props.isActive
          ? "var(--red-500) !important"
          : "var(--neutral-700)",
      }}
    >
      <div
        className={
          !props.isActive ? "switch-slider-left" : "switch-slider-right"
        }
      ></div>
    </div>
  );
};

export default Switch;
