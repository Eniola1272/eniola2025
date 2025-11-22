import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { frontendSkills, backendSkills } from "../../constants/index.js";

const Skills = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#s-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#s-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="skills" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="s-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="s-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Frontend Arsenal:</h2>

          <ul>
            {frontendSkills.map(({ name, category, experience }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {category} | {experience}
                  </p>
                </div>
                <span className="skill-badge">{experience}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Backend & Tools:</h2>

          <ul>
            {backendSkills.map(({ name, category, experience }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {category} | {experience}
                  </p>
                </div>
                <span className="skill-badge">{experience}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
