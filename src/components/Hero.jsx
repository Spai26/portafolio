import Header from "../components/layouts/header/header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Portfolio from "./pages/portfolio/Portfolio";

const Hero = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Hero;
