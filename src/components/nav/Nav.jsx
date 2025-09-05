import React from "react";
import LogoLight from "../../assets/images/logo.svg";
import Sun from "../../assets/images/icon-sun.svg";
import Moon from "../../assets/images/icon-moon.svg";

const Nav = () => {
  return (
    <nav>
      <img src={LogoLight} />
      <button className="nav-change-theme-btn" id="changeThemeBtn">
        <img src={Sun} />
      </button>
    </nav>
  );
};

export default Nav;
