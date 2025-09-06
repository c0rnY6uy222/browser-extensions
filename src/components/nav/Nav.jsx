import React from "react";
import LogoLight from "../../assets/images/logo.svg";
import LogoDark from "../../assets/images/logo-dark.svg";
import Sun from "../../assets/images/icon-sun.svg";
import Moon from "../../assets/images/icon-moon.svg";

import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={LogoDark} />
      <button className="nav-change-theme-btn" id="changeThemeBtn">
        <img src={Sun} />
      </button>
    </nav>
  );
};

export default Nav;
