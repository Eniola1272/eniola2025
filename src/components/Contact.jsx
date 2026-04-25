import { availability, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Let's Connect</h2>

        <div>
          <h3>Location</h3>
          <p>39, Lasokun, Ibadan</p>
          <p>Oyo State, Nigeria</p>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <p>+234 903 868 1717</p>
          <p>aderounmueniola60@gmail.com</p>
          <a
            href="https://wa.me/+2349038681717"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Chat With Eniola →
          </a>
        </div>

        <div>
          <h3>Availability</h3>
          {availability.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
          <p className="text-sm text-gray-400 mt-2">
            Open to remote opportunities globally
          </p>
        </div>

        <div>
          <h3>Connect</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-transform hover:scale-110 hover:-translate-y-1"
              >
                <img src={social.icon} alt={social.name} className="w-8 h-8" />
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-6">
            © 2026 Eniola Aderounmu. Built with React & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
