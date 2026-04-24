import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Portfolio from "./components/Portfolio.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default App;
