import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import nextjs from "../public/media/icons/next3.svg";
import react from "../public/media/icons/reactjs.svg";


export default function Projects() {
    const { refs } = useCustomSmoothScroll();

    /* Project data */
    const projects = {
        project1: {
            name: "Project 1",
            description: "This is a project",
            technologies: [nextjs, react],
        },
        project2: {
            name: "Project 2",
            description: "This is a project",
            technologies: [nextjs, react],
        },
        project3: {
            name: "Project 3",
            description: "This is a project",
            technologies: [nextjs, react],
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
                    </div>
                </div>

                <div className="project-preview">
                    <div className="project-preview-container">

                        {/* Project 1 */}
                        <div className="project-preview-image">
                            <Image src="/images/placeholder.png" alt="placeholder" width={500} height={500} />
                        </div>
                        {/* Project 2 */}
                        <div className="project-preview-image">
                            <Image src="/images/placeholder.png" alt="placeholder" width={500} height={500} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}