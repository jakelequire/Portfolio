import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import github from '../public/media/icons/github.svg';
import link from '../public/media/icons/link.svg';
import solboba_logo from '../public/media/icons/solboba-logo.svg';
import logo from '../public/media/icons/logo.svg';
import comingsoon from '../public/media/icons/comingsoon.svg';

export default function Projects() {
    const { refs } = useCustomSmoothScroll();

    const [hover, setHover] = useState(false);
    const [hoverTwo, setHoverTwo] = useState(false);
    useEffect(() => {
        const handleMouseEnter = () => setHover(true);
        const handleMouseLeave = () => setHover(false);

        const el = document.querySelector('.ext-linkOne')
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setHoverTwo(true);
        const handleMouseLeave = () => setHoverTwo(false);

        const el = document.querySelector('.ext-linkTwo')
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const [hoverOneActive, setHoverOneActive] = useState("");
    const [hoverTwoActive, setHoverTwoActive] = useState("");
    useEffect(() => {
        console.log('Hover changed', hover);
        if(hover) {
            setHoverOneActive("link-active");
        } else {
            setHoverOneActive("link-inactive");
        }
    }, [hover]);
    useEffect(() => {
        console.log('Hover changed', hoverTwo);
        if(hoverTwo) {
            setHoverTwoActive("link-active");
        } else {
            setHoverTwoActive("link-inactive");
        }
    }, [hoverTwo]);


    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>
            <div className="projects-header">
                <h1 className="projects-header-text"><span id="project-P">P</span>rojects</h1>
            </div>
            <div className="projects-container">
                <div className="project-list">
                    <div className="project" id={hoverOneActive === 'link-active' ? 'hoverOneActive' : 'hoverOneInactive'}>
                        <Image className="project-image" src={solboba_logo} alt="Sol Boba Logo" width={200} height={200} />
                        <h1 className="project-title">Sol Boba</h1>
                        <div className="project-links">
                            <a href="" className="project-link ">
                                <Image className="linkOne-github" width={50} height={50} src={github} alt="GitHub" />
                            </a>
                            <a href="" className="project-link ext-linkOne" 
                            id={hover ? 'link-active' : 'link-inactive'}>
                                <Image width={50} height={50} src={link} alt="Link" />
                            </a>
                        </div>
                    </div>
                    <div className="projectTwo" id={hoverTwoActive === 'link-active' ? 'hoverTwoActive' : 'hoverTwoInactive'}>
                        <Image className="project-image" src={logo} alt="My Portfolio" width={200} height={200} />
                        <h1 className="project-title">My Portfolio</h1>
                        <div className="project-links">
                            <a href="" className="project-link linkTwo-github">
                                <Image width={50} height={50} src={github} alt="GitHub" />
                            </a>
                            <a href="" className="project-link ext-linkTwo" 
                            id={hoverTwo ? 'link-active' : 'link-inactive'}>
                                <Image width={50} height={50} src={link} alt="Link" />
                            </a>
                        </div>
                    </div>
                    <div className="projectThree" id="projectThree">
                        <Image className="project-image" src={comingsoon} alt="My Portfolio" width={125} height={200} />
                        <h1 className="project-title">...</h1>
                        <div className="project-links">
                            {/* <a href="" className="project-link">
                                <Image width={50} height={50} src={github} alt="GitHub" />
                            </a>
                            <a href="" className="project-link">
                                <Image width={50} height={50} src={link} alt="Link" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}