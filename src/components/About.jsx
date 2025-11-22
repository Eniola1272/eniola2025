import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">About Me</p>
            <h2 className="mt-4 text-purple-50">
              I make passion meet precision{" "}
              <span className="text-white">—</span>
              crafting digital experiences with purpose
            </h2>
          </div>

          <div className="sub-content">
            <p>
              I'm a frontend developer from Ibadan, Nigeria, specializing in
              React and Next.js. I build fast, responsive web applications that
              blend clean code with thoughtful design. From e-commerce platforms
              to e-learning systems, I create digital products that users love.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>5+</span> Years
              </p>
              <p className="text-sm text-white-100">Building web experiences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/vagabond.jpg" alt="Vagabond Rentals" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img
            src="/images/thecoursemasters.png"
            alt="Course Masters Platform"
          />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/mercylandhomecare.jpg" alt="Mercy Land Home Care" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/restoration-villa.jpg" alt="Restoration Villa" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/coding-in-action.jpg" alt="Coding in action" />
        </div>
      </div>
    </div>
  );
};
export default About;
