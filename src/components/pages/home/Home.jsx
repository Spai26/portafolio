/* style */
import styled from "./Home.module.css";
/*icons  */
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
/* data */
import { informationHome } from "../../../Utils/data";

const Home = () => {
  const { titulo, cuerpo, image, frontend_skill, linkedin, github } =
    informationHome;
  return (
    <section id="home">
      <div className={styled.container}>
        <div className={styled.element_1}>
          <h1>{titulo}</h1>
          <p>
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
        <div className={styled.element_2}>
          <div>
            <img src={image} alt="anymore" />
          </div>
        </div>
        <div className={styled.element_3}>
          <span className={styled.clickMe}>click me !</span>
          <h1>skills</h1>
        </div>
      </div>

      <div>
        {frontend_skill.map((element, index) => {
          return (
            <div>
              {element.name}

              <img src={element.icon} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
