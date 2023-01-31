import { useState } from "react";
import Nav from "../nav/Nav";
import NavMovile from "../navMovile/NavMovile";

/* styled */
import styled from "./Header.module.css";

const Header = () => {
  const [fixed, setFixed] = useState(false);

  function setFix() {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  window.addEventListener("scroll", setFix);
  return (
    <header className={fixed ? styled.bg_active : ""}>
      <div className={styled.content}>
        <div data-aos="fade-right" data-aos-duration="800">
          <h1>SergioAi</h1>
        </div>
        <Nav />
        <NavMovile />
      </div>
    </header>
  );
};

export default Header;
