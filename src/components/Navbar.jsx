import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Menu, X } from "lucide-react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

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

  // Close mobile menu on route resize to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Animate mobile menu
  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
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
        }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at top right)",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Resume_CV_ENIOLA_ADEROUNMU.docx";
    link.download = "Resume_CV_ENIOLA_ADEROUNMU.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
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

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="mobile-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="mobile-nav-link">
              <a href={`#${link.id}`} onClick={handleNavClick}>
                {link.title}
              </a>
            </li>
          ))}
          <li className="mobile-nav-link">
            <button
              onClick={() => {
                handleDownloadCV();
                handleNavClick();
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
