import { useState, useEffect, useRef } from "react";
import Image from "next/image";
/* -- Hooks -- */
import useCustomSmoothScroll from "./hooks/useCustomSmoothScroll.jsx";
import useProjectSlideshow from "./hooks/useProjectSlideshow.jsx";
/* -- SVG -- */
import nextjs from "../public/media/icons/tech-branding/next3.svg";
import react from "../public/media/icons/tech-branding/reactjs.svg";
import javascript from "../public/media/icons/tech-branding/javascript.svg";
import typescript from "../public/media/icons/tech-branding/typescript.svg";
import nodejs from "../public/media/icons/tech-branding/nodejs.svg";
/* -- PNG -- */

// >------------------------------------------------------------------------------------------
export default function Projects() {
  const { refs } = useCustomSmoothScroll();
	const [currentProject, setCurrentProject] = useProjectSlideshow();

	const projectKey = () => {
		const projectState = currentProject
		if (projectState === 0) {
			return "project1-active"
		} else if (projectState === 1) {
			return "project2-active"
		} else if (projectState === 2) {
			return "project3-active"
		} else if (projectState === 3) {
			return "project4-active"
		}
	}

  /* Project data */
  const projects = {
    project1: {
      name: "Sol Boba",
      description:
        "Small business website for a local boba tea shop. My first project!",
      technologies: [nextjs, react, javascript],
      id: "project1",
    },
    project2: {
      name: "Portfolio",
      description:
        "My personal portfolio website. Built to learn backend and frontend development.",
      technologies: [nextjs, react, javascript],
      id: "project2",
    },
    project3: {
      name: "Portfolio - Backend",
      description:
        "Backend for my personal portfolio website. Built to learn backend development.",
      technologies: [nextjs, nodejs, javascript],
      id: "project3",
    },
    project4: {
      name: "Coming Soon",
      description: "New project coming soon! Practice for learning TypeScript.",
      technologies: [nextjs, react, typescript],
      id: "project4",
    },
  };
  /* Project layout template */
  const projectItems = Object.values(projects).map((project, index) => (
    <div
      className="project-item"
      key={index}
      onClick={() => setSelectedProject(project)}
    >
      <div className="project-item-wrapper">
        <h2 className="project-item-name">{project.name}</h2>
        <p className="project-item-description">{project.description}</p>
      </div>
      <div className="project-item-image">
        {project.technologies.map((technology, index) => (
          <Image
            src={technology}
            alt={technology}
            width={50}
            height={50}
            key={index}
          />
        ))}
      </div>
    </div>
  ));
  const [selectedProject, setSelectedProject] = useState(projectItems[0]);
  /* ----------------- */

  /* Project image data */
  const projectImages = {
    project1: {
      alt: "Sol Boba Homepage",
      github: "https://github.com/jakelequire/SolBoba",
      website: "https://solboba.com/",
    },
    project2: {
      alt: "Personal Portfolio",
      github: "https://github.com/jakelequire/Portfolio",
      website: "https://jakelequire.dev/",
    },
    project3: {
      alt: "Personal Portfolio - Backend",
      github: "https://github.com/jakelequire/portfolio-backend",
    },
    project4: {
      alt: "Coming Soon",
      github: "",
      website: "placeholder",
    },
  };
  /* Image layout template */
  const projectLink = Object.values(projectImages).map((project, index) => (
    <div className="project-preview-image" key={index}>
      <div className="project-link-container">
			{index === 0 ? 
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="project-link visit-site"
        >
          Visit Site
        </a> : null}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link view-code"
					id={index === 3 ? "view-code-disabled" : ""}
        >
          View Code
        </a>
      </div>
    </div>
  ));
  /* ----------------- */





  // >------------------------------------------------------------------------------------------
  return (
    <div className="projects-wrapper" id="projects" ref={refs[2]}>
      <div className="projects-header">
        <h1 className="projects-header-text">
          <span id="project-P">P</span>rojects
        </h1>
      </div>
      <div className="projects-container" id={projectKey()}> {/* This is the container for the background to change */}
        <div className="project-list">
          <div className="project-item-container">
            <a className={`project-items ${currentProject === 0 ? 'project-active' : 'project-inactive'}`}
						onClick={() => setCurrentProject(0)}>
              {projectItems[0]}
            </a>
            <a className={`project-items ${currentProject === 1 ? 'project-active' : 'project-inactive'}`}
						onClick={() => setCurrentProject(1)}>
              {projectItems[1]}
            </a>
            <a className={`project-items ${currentProject === 2 ? 'project-active' : 'project-inactive'}`}
						onClick={() => setCurrentProject(2)}>
              {projectItems[2]}
            </a>
            <a  className={`project-items ${currentProject === 3 ? 'project-active' : 'project-inactive'}`}
						onClick={() => setCurrentProject(3)}>
              {projectItems[3]}
            </a>
          </div>
					<div className="project-preview">
    			{currentProject === 0 ? projectLink[0] : null}
    			{currentProject === 1 ? projectLink[1] : null}
    			{currentProject === 2 ? projectLink[2] : null}
    			{currentProject === 3 ? projectLink[3] : null}
					</div> 
      	</div>
      </div>
    </div>
  );
}