import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import nextjs from "../public/media/icons/next3.svg";
import react from "../public/media/icons/reactjs.svg";

export default function Projects() {
    const { refs } = useCustomSmoothScroll();

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
// >------------------------------------------------------------------------------------------
    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>
            <div className="projects-header">
                <h1 className="projects-header-text"><span id="project-P">P</span>rojects</h1>
            </div>
            <div className="projects-container">

                <div className="project-list">
                    <div className="project-item-container">

                        {/* Project 1 */}
                        <div className="project-item">
                            <div className="project-item-wrapper">
                                <h2 className="project-item-name">{projects.project1.name}</h2>
                                <p className="project-item-description">{projects.project1.description}</p>
                            </div>
                            <div className="project-item-image">
                                <Image src={projects.project1.technologies[0]}
                                alt="placeholder" width={50} height={50} />
                                <Image src={projects.project1.technologies[1]}
                                alt="placeholder" width={50} height={50} />
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="project-item">
                            <div className="project-item-wrapper">
                                <h2 className="project-item-name">{projects.project2.name}</h2>
                                <p className="project-item-description">{projects.project2.description}</p>
                            </div>
                            <div className="project-item-image">
                                <Image src={projects.project2.technologies[0]}
                                alt="placeholder" width={50} height={50} />
                                <Image src={projects.project2.technologies[1]}
                                alt="placeholder" width={50} height={50} />
                            </div>
                        </div>
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