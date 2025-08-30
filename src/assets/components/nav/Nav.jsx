import Moon from "../../images/icon-moon.svg";
import Sun from "../../images/icon-sun.svg";
import LogoLight from "../../images/logo.svg";
import LogoDark from "../../images/logo-dark.svg";

import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [mode, setMode] = useState(false);

  const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);

    console.log(localStorage.getItem("theme"));
  };

  const changeColorScheme = () => {
    setMode(!mode);
    saveTheme(mode);
  };

  return (
    <nav>
      <img src={LogoDark} className="nav-logo" />

      <button onClick={changeColorScheme}>
        <img src={!mode ? Sun : Moon} className="nav-mode-btn" />
      </button>
    </nav>
  );
};

export default Nav;
