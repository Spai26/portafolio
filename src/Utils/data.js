/* this information for nav */
export const navigationData = [
  {
    name: "Home",
    path: "home",
    ref: "#home",
  },
  {
    name: "About",
    path: "about",
    ref: "#about",
  },
  {
    name: "Experience",
    path: "experience",
    ref: "#experience",
  },
  {
    name: "Portfolio",
    path: "portfolio",
    ref: "#portfolio",
  },
  {
    name: "Contact",
    path: "contact",
    ref: "#contact",
  },
];

/* ############# this image ############# */
import image_principal from "../img/principal.jpg";
/* import svg */
import svgjS from "../img/svg/javascript-svgrepo-com.svg";
import svgCss from "../img/svg/css-3-svgrepo-com.svg";
import svgHtml from "../img/svg/html-5-svgrepo-com.svg";
import svgReact from "../img/svg/react-javascript-js-framework-facebook-svgrepo-com.svg";
import svgRedux from "../img/svg/redux-svgrepo-com.svg";
import svgMysql from "../img/svg/mysql-logo-svgrepo-com.svg";
import svgNode from "../img/svg/node-js-svgrepo-com.svg";
/* home information */
export const informationHome = {
  titulo: "Hi ! I'm Sergio",
  cuerpo: "Soy Desarrollador Web full Stack ",
  image: image_principal,
  linkedin: "www.linkedin.com/in/sergioai93",
  github: "https://github.com/Spai26",
  frontend: "Frontend Development",
  frontend_skill: [
    { name: "javacript", icon: svgjS },
    { name: "css", icon: svgCss },
    { name: "html5", icon: svgHtml },
    { name: "react", icon: svgReact },
    { name: "redux", icon: svgRedux },
  ],
  backend: "Backend Development",
  back_skill: [
    { name: "nodeJs", icon: svgNode },
    { name: "mySql", icon: svgMysql },
  ],
};
