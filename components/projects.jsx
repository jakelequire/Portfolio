import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import useCustomSmoothScroll from "./hooks/useCustomSmoothScroll.jsx";
/* -- SVG -- */
import nextjs from "../public/media/icons/tech-branding/next3.svg";
import react from "../public/media/icons/tech-branding/reactjs.svg";
import javascript from "../public/media/icons/tech-branding/javascript.svg";
import typescript from "../public/media/icons/tech-branding/typescript.svg";
import nodejs from "../public/media/icons/tech-branding/nodejs.svg";
/* -- PNG -- */
import SolBobaHomepage from "../public/media/pictures/SolBobaHomepage.png";

export default function Projects() {
  const { refs } = useCustomSmoothScroll();

  /* Project data */
  const projects = {
    project1: {
      name: "Sol Boba",
      description:
        "Small business website for a local boba tea shop. My first project!",
      technologies: [nextjs, react, javascript],
    },
    project2: {
      name: "Portfolio",
      description:
        "My personal portfolio website. Built to learn backend and frontend development.",
      technologies: [nextjs, react, javascript],
    },
    project3: {
      name: "Portfolio - Backend",
      description:
        "Backend for my personal portfolio website. Built to learn backend development.",
      technologies: [nextjs, nodejs, javascript],
    },
    project4: {
      name: "Coming Soon",
      description: "New project coming soon! Practice for learning TypeScript.",
      technologies: [nextjs, react, typescript],
    },
  };
  /* Project layout template */
  const projectItems = Object.values(projects).map((project, index) => (
    <div className="project-item" key={index} onClick={() => setSelectedProject(project)}>
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
	const projectImages = {
		project1: {
			image: SolBobaHomepage,
			alt: "Sol Boba Homepage",
			github: "https://github.com/jakelequire/SolBoba",
			website: "https://solboba.com/",
		},
		project2: {
			image: SolBobaHomepage,
			alt: "Personal Portfolio",
			github: "https://github.com/jakelequire/Portfolio",
			website: "https://jakelequire.dev/",
		},
		project3: {
			image: SolBobaHomepage,
			alt: "Personal Portfolio - Backend",
			github: "https://github.com/jakelequire/portfolio-backend",
			website: "https://solboba.com/",
		},
		project4: {
			image: SolBobaHomepage,
			alt: "Coming Soon",
			github: "",
			website: "https://solboba.com/",
		},
	}

	const projectImage = Object.values(projectImages).map((project, index) => (
		<div className="project-preview-image" key={index}>
			<Image src={project.image} className="preview-image" alt={project.alt} width={774} height={640} />
			<div className="project-link-container">
				<a href={project.website} 
				target="_blank" 
				rel="noreferrer" 
				className="project-link visit-site">Visit Site</a>
				<a href={project.github}
				target="_blank"
				rel="noreferrer"
				className="project-link view-code">View Code</a>
			</div>
		</div>
	))

  // >------------------------------------------------------------------------------------------
  return (
    <div className="projects-wrapper" id="projects" ref={refs[2]}>
      <div className="projects-header">
        <h1 className="projects-header-text">
          <span id="project-P">P</span>rojects
        </h1>
      </div>
      <div className="projects-container">
        <div className="project-list">
          <div className="project-item-container">
            {projectItems[0]}
            {projectItems[1]}
            {projectItems[2]}
            {projectItems[3]}
          </div>
        </div>

        <div className="project-preview">
					{projectImage[0]}
        </div>
      </div>
    </div>
  );
}
