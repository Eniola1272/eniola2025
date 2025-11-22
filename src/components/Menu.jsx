"use client";

import { allProjects } from "../../constants/index.js";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".project-display img",
      { opacity: 0, scale: 0.9 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, [currentIndex]);

  const totalProjects = allProjects.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalProjects) % totalProjects;
    setCurrentIndex(newIndex);
  };

  const getProjectAt = (indexOffset) => {
    return allProjects[
      (currentIndex + indexOffset + totalProjects) % totalProjects
    ];
  };

  const currentProject = getProjectAt(0);
  const prevProject = getProjectAt(-1);
  const nextProject = getProjectAt(1);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="p-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="p-right-leaf"
      />

      <div className="container mx-auto px-5 py-20">
        <h2 id="projects-heading" className="sr-only">
          Featured Projects
        </h2>

        {/* Dot Navigation */}
        <div className="project-dots">
          {allProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to ${project.name}`}
            />
          ))}
        </div>

        <div className="projects-content">
          {/* Navigation Arrows */}
          <div className="project-arrows">
            <button
              className="arrow-btn arrow-left"
              onClick={() => goToSlide(currentIndex - 1)}
            >
              <ArrowLeft size={16} />
              <span className="arrow-label">{prevProject.name}</span>
            </button>

            <button
              className="arrow-btn arrow-right"
              onClick={() => goToSlide(currentIndex + 1)}
            >
              <ArrowRight size={16} />
              <span className="arrow-label">{nextProject.name}</span>
            </button>
          </div>

          {/* Project Display */}
          <div className="project-display">
            <img
              src={currentProject.image}
              className="object-contain"
              alt={currentProject.name}
            />
          </div>

          {/* Project Info - Below Image */}
          <div className="project-info-wrapper">
            <div ref={contentRef} className="info">
              <p className="project-label">Project:</p>
              <p id="title" className="project-name">
                {currentProject.name}
              </p>
            </div>

            <div className="details">
              <h2>{currentProject.title}</h2>
              <p>{currentProject.description}</p>

              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
              >
                View Live Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
