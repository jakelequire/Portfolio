import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";
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
            description: "Small business website for a local boba tea shop. My first project!",
            technologies: [nextjs, react, javascript],
        },
        project2: {
            name: "Portfolio",
            description: "My personal portfolio website. Built to learn backend and frontend development.",
            technologies: [nextjs, react, javascript],
        },
        project3: {
            name: "Portfolio - Backend",
            description: "Backend for my personal portfolio website. Built to learn backend development.",
            technologies: [nextjs, nodejs, javascript],
        },
        project4: {
            name: "Coming Soon",
            description: "New project coming soon! Practice for learning TypeScript.",
            technologies: [nextjs, react, typescript],
        }
    }
    /* Project layout template */
    const projectItems = Object.values(projects).map((project, index) => (
        <div className="project-item" key={index}>
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
// >------------------------------------------------------------------------------------------
    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>
            <div className="projects-header">
                <h1 className="projects-header-text"><span id="project-P">P</span>rojects</h1>
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
                    {/* Project 1 */}
                    <div className="project-preview-image">
                        <Image src={SolBobaHomepage} className="preview-image"
                        alt="placeholder" width={774} height={640} />
                        <div className="project-link-container">
                            <a href="https://solboba.com/" target="_blank"
                            rel="noreferrer" className="project-link visit-site">Visit Site</a>
                            <a href="https://github.com/jakelequire/SolBoba" target="_blank"
                            rel="noreferrer" className="project-link view-code">View Code</a>
                        </div>
                    </div>
                    {/* Project 2 */}
                </div>
            </div>
        </div>
    )
}