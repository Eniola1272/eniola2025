import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { softSkills, technicalStrengths } from "../../constants";

const Work = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <div id="work">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">MY CRAFT</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {softSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{skill}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/coding-workspace.jpg"
              alt="developer workspace"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {technicalStrengths.map((strength, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{strength}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Code That Speaks</h2>
          <div id="masked-content">
            <h3>Built with Precision, Delivered with Purpose</h3>
            <p>
              Every project is an opportunity to solve real problems with
              elegant code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
