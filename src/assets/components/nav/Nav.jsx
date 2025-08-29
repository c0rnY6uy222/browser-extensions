import { useRef, useState } from "react";

import Moon from "../../images/icon-moon.svg";
import Sun from "../../images/icon-sun.svg";
import Logo from "../../images/logo.svg";

import "./nav.css";

const Nav = () => {
  const modeRef = useRef(false);
  const [img, setImg] = useState(Sun);

  const darkMode = () => {
    if (img == Sun) {
      modeRef.current = true;
      setImg(Moon);
    } else {
      modeRef.current = false;
      setImg(Sun);
    }
  };

  return (
    <nav>
      <img src={Logo} className="nav-logo" />

      <button>
        <img src={img} onClick={darkMode} className="nav-mode-btn" />
      </button>
    </nav>
  );
};

export default Nav;
