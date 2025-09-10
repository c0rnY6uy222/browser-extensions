import React, { useState } from "react";
import LogoLight from "../../assets/images/logo.svg";
import LogoDark from "../../assets/images/logo-dark.svg";
import Sun from "../../assets/images/icon-sun.svg";
import Moon from "../../assets/images/icon-moon.svg";

import "./nav.css";

const Nav = () => {
  const globalTheme = localStorage.getItem("data-theme");
  const [theme, setTheme] = useState(globalTheme);

  return (
    <nav>
      <img src={theme == "dark" ? LogoDark : LogoLight} />
      <input
        type="checkbox"
        id="changeThemeBtn"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme("light");
            localStorage.setItem("data-theme", "light");
          } else {
            setTheme("dark");
            localStorage.setItem("data-theme", "dark");
          }
        }}
      />
      <label className="nav-change-theme-btn" htmlFor="changeThemeBtn">
        <img src={theme == "dark" ? Sun : Moon} />
      </label>
    </nav>
  );
};

export default Nav;
