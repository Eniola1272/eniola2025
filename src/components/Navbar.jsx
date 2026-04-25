import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Menu, X } from "lucide-react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const menuRef = useRef(null);

  // Scroll-based nav background — triggers at 80px scroll, not on the fixed nav element
  useGSAP(() => {
    ScrollTrigger.create({
      start: 80,
      onEnter: () =>
        gsap.to("nav", {
          backgroundColor: "#000000BB",
          backdropFilter: "blur(12px)",
          duration: 0.4,
          overwrite: true,
        }),
      onLeaveBack: () =>
        gsap.to("nav", {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          duration: 0.4,
          overwrite: true,
        }),
    });
  });

  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Animate mobile menu in/out — toggle pointer-events so closed menu doesn't block page
  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      menuRef.current.style.pointerEvents = "auto";
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at top right)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ".mobile-nav-link",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.2,
          ease: "power2.out",
        },
      );
    } else {
      menuRef.current.style.pointerEvents = "none";
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at top right)",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Resume_CV_ENIOLA_ADEROUNMU.pdf";
    link.download = "Resume_CV_ENIOLA_ADEROUNMU.pdf";
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

        {/* Desktop Nav */}
        <ul className="desktop-nav">
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

        {/* Hamburger — mobile/tablet only */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="mobile-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="mobile-nav-link">
              <a href={`#${link.id}`} onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
          <li className="mobile-nav-link">
            <button
              onClick={() => {
                handleDownloadCV();
                setIsMenuOpen(false);
              }}
              className="download-cv-btn"
            >
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
