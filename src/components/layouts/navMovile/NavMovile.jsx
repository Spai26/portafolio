import { useState } from "react";

/* data */
import { navigationData } from "../../../Utils/data";
/* icons */
import { FaTimes, FaBars } from "react-icons/fa";
/* style */
import styled from "./NavMovile.module.css";

const NavMovile = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [click, setClick] = useState(false);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
    setClick(false);
  }
  return (
    <div className={styled.movile}>
      <div
        onClick={() => setClick(!click)}
        className={styled.hamburger}
        click={click.toString()}
      >
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${styled.navigation_movile} ${click ? styled.isOpen : ""}`}
      >
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
      </div>
    </div>
  );
};

export default NavMovile;
