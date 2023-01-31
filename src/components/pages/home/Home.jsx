/* style */
import styled from "./Home.module.css";
/*icons  */
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
/* data */
import { informationHome } from "../../../Utils/data";
import { useState } from "react";

const Home = () => {
  const { titulo, cuerpo, image, frontend_skill, linkedin, github } =
    informationHome;

  const [skill, setSkill] = useState(false);
  return (
    <section id="home">
      <div className={styled.container}>
        <div className={styled.contenido}>
          <h1 data-aos="fade-rigth" data-aos-delay="400">
            {titulo}
          </h1>
          <p data-aos="fade-up-rigth" data-aos-delay="600">
            {cuerpo}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem non possimus blanditiis distinctio asperiores
            temporibus necessitatibus nisi odio dolore reiciendis, quam optio
            aspernatur, hic ad minima eius facere quae accusantium!
          </p>

          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle" },
              className: styled.icon,
            }}
          >
            <div className={styled.social}>
              <div>
                <a href={github} target="_blank">
                  <AiFillGithub />
                </a>
              </div>
              <div>
                <a href={linkedin} target="_blank">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </IconContext.Provider>
        </div>

        <div className={styled.content_image}>
          <div>
            <img src={image} alt="anymore" />
          </div>
        </div>
        <div className={styled.skill_body}>
          <div className={styled.clickMe}>click me !</div>
          <h1
            className={`${styled.title} ${skill ? styled.active : ""}`}
            onClick={() => setSkill(!skill)}
          >
            skills
          </h1>
          <div className={styled.list}>
            {frontend_skill.map((element, index) => {
              return (
                <div key={index}>
                  {element.name}

                  <img className={styled.icon} src={element.icon} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
