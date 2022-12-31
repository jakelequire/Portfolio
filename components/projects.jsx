import { useRef } from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import github from '../public/media/icons/github.svg';
import link from '../public/media/icons/link.svg';
import solboba_logo from '../public/media/icons/solboba-logo.svg'
import react from '../public/media/Icons/reactjs.svg';
import next from '../public/media/Icons/next.svg'
import nextjs from '../public/media/Icons/Nextjs-logo.svg'

export default function Projects() {
    const { refs } = useCustomSmoothScroll();


    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>
            <div className="projects-header">
                <h1 className="projects-header-text">Projects</h1>
            </div>
            <div className="projects-container">
                <div className="project-list">
                    <div className="project" id="projectOne">
                        <Image className="project-image" src={solboba_logo} alt="Sol Boba Logo" width={200} height={200} />
                        <h1 className="project-title">Sol Boba</h1>
                        <div className="project-links">
                            <a href="" className="project-link">
                                <Image width={50} height={50} src={github} alt="GitHub" />
                            </a>
                            <a href="" className="project-link">
                                <Image width={50} height={50} src={link} alt="Link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}