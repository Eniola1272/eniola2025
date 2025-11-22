import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    // Animate profile picture on mobile
    gsap.from(".profile-pic", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 0.5,
      ease: "back.out(1.7)",
    });

    // Animate tech icons
    gsap.from(".tech-icon", {
      opacity: 0,
      scale: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "back.out(1.7)",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".tech-icon-1", { y: 200, rotation: 15 }, 0)
      .to(".tech-icon-2", { y: -150, rotation: -10 }, 0)
      .to(".tech-icon-3", { y: 180, rotation: 20 }, 0)
      .to(".tech-icon-4", { y: -200, rotation: -15 }, 0)
      .to(".arrow", { y: 100 }, 0);

    // Animate glowing orbs
    gsap.to(".orb", {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      duration: "random(6, 10)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random",
      },
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        {/* Profile Picture - Mobile Only */}
        <div className="profile-pic md:hidden">
          <img src="/images/eniola-profile.jpg" alt="Eniola Aderounmu" />
        </div>

        <h1 className="title flex flex-col">
          ENIOLA <span className="small-text">ADEROUNMU</span>
        </h1>
        
        {/* Glowing Orbs Background */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        {/* Tech Stack Icons */}
        <img
          src="/icons/react-icon.svg"
          alt="React"
          className="tech-icon tech-icon-1 invert"
        />
        <img
          src="/icons/next-icon.svg"
          alt="Next.js"
          className="tech-icon tech-icon-2 invert"
        />
        <img
          src="/icons/javascript-icon.svg"
          alt="JavaScript"
          className="tech-icon tech-icon-3 invert"
        />
        <img
          src="/icons/node-icon.svg"
          alt="Node.js"
          className="tech-icon tech-icon-4 invert"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 md:block">
              <p>Frontend Developer. React Engineer.</p>
              <p>
                Building Fast <br /> Responsive Experiences
              </p>
            </div>

            <div className="view-projects">
              <p>
                I create modern web applications using React, Next.js, and the
                MERN stack — crafting seamless user interfaces that blend
                functionality with elegant design.
              </p>
              <a href="#projects">View my work</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;