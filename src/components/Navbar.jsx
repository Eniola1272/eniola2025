import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Resume_CV_ENIOLA_ADEROUNMU.docx";
    link.download = "Resume_CV_ENIOLA_ADEROUNMU.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>Eniola</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <button onClick={handleDownloadCV} className="download-cv-btn">
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
