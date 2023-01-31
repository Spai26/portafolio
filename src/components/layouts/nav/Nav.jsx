import { useState } from "react";

/* data */
import { navigationData } from "../../../Utils/data";

/* style */
import styled from "./Nav.module.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    <nav className={styled.navigation}>
      {navigationData.map((element, index) => {
        return (
          <a
            key={index}
            href={element.ref}
            className={activeLink === element.path ? styled.isActive : ""}
            onClick={() => onUpdateActiveLink(element.path)}
          >
            {element.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
