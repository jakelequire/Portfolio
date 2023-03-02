import { useState, useEffect, useRef } from "react";
import { SecondaryButton } from "./subComponents/components.jsx";
import Image from "next/image.js";
/* -- Hooks -- */
import useObserver from "./hooks/useCustomSmoothScroll.jsx";
import useProjectIndex from "./hooks/useProjectIndex.jsx";
/* SVGs */
import ExternalLink_W from "../public/media/icons/web-media/external-link-black.svg";
import ExternalLink from "../public/media/icons/web-media/external-link.svg";
import GitHub_W from "../public/media/icons/tech-branding/github-black.svg";
import GitHub from "../public/media/icons/tech-branding/github.svg";
import RadarChartWhite from '../public/media/icons/web-media/radar-chart-W.svg'
import RadarChartGreen from '../public/media/icons/web-media/radar-chart-G.svg'
import TreeMapWhite from '../public/media/icons/web-media/treemap-chart-W.svg'
import TreeMapGreen from '../public/media/icons/web-media/treemap-chart-G.svg'
/* Slideshow */
import SolBoba_Image from '../public/media/pictures/SolBobaHomepage.webp';
import Portfolio_Image from '../public/media/pictures/portfolioPreview.webp';
import PortfolioBackend_Image from '../public/media/pictures/portfoliobackend.webp';
import ComingSoon_Image from '../public/media/pictures/comingsoon.webp';

// >------------------------------------------------------------------------------------------
export default function Projects() {
  const { ref } = useObserver();
  const { 
    index, 
    setIndex, 
    dataIndex, 
    setDataIndex, 
    curRadarData, 
    curTreeMapData,
    curWebsite,
    curGithub
  } = useProjectIndex();

  const [radarHover, setRadarHover] = useState(false);
  const [treemapHover, setTreemapHover] = useState(false);
  const [gitBtnHover, setGitBtnHover] = useState(false);
  const [webBtnHover, setWebBtnHover] = useState(false);

  useEffect(() => {
    const radarIcon = document.querySelector('.icon-radar-chart');
    const treemapIcon = document.querySelector('.icon-tree-map');
    radarIcon.addEventListener('mouseover', () => {
      setRadarHover(true);
    });
    radarIcon.addEventListener('mouseout', () => {
      setRadarHover(false);
    });
    treemapIcon.addEventListener('mouseover', () => {
      setTreemapHover(true);
    });
    treemapIcon.addEventListener('mouseout', () => {
      setTreemapHover(false);
    });
  }, []);

  useEffect(() => {
    const gitBtn = document.querySelector('.github-btn');
    const webBtn = document.querySelector('.website-btn');
    gitBtn.addEventListener('mouseover', () => {
      setGitBtnHover(true);
    });
    gitBtn.addEventListener('mouseout', () => {
      setGitBtnHover(false);
    });
    webBtn.addEventListener('mouseover', () => {
      setWebBtnHover(true);
    });
    webBtn.addEventListener('mouseout', () => {
      setWebBtnHover(false);
    });
  }, []);

  const activeIndex = {
    active: <span className="project-link-active"></span>,
    inactive: <span className="project-link-inactive"></span>
  }

  const projects = {
    "solboba": {
      "id": "solboba",
      "title": "Sol Boba",
      "description": "My first project! The first time I've been hands on using modern technologies. [Unfinished]",
      "tech": ["React.js", "Next.js"]
    },
    "portfolio": {
      "id": "portfolio",
      "title": "Portfolio",
      "description": "My second project. I wanted to create a portfolio that was more than just a static website.",
      "tech": ["React.js", "Next.js", "Axios"]
    },
    "portfolio_backend": {
      "id": "portfolio_backend",
      "title": "Portfolio Backend",
      "description": "A separate repository to gain a better understanding of backend development.",
      "language": ["TypeScript", "JavaScript"],
      "tech": ["Node.js", "Express.js", "Axios"]
    },
    "coming_soon": {
      "id": "coming_soon",
      "title": "Coming Soon",
      "description": "",
      "language": [""],
      "tech": [""]
    }
  }

  const projectConstructor = (index) => {
    const projectData = Object.values(projects).map((project) => {
      return (
        <div className="P-item-container">
          <div className="P-header-wrapper">
            <h2 className="p-header">{project.title}</h2>
          </div>
          <div className="item-description">
            <p className="p-description">{project.description}</p>
          </div>
        </div>
      )
    })
    return projectData[index];
  }

// >------------------------------------------------------------------------------------------
  return (
    <div className="projects-wrapper" id="projects" ref={ref.projects}>
      <div className="index-category-header">
        <h1 className="category-header-text">
          Projects
        </h1>
      </div>
      <div className="projects-container">
        <div className="project-list">
          {/* -- List of Projects -- */}
          <div className="project-heading">
            <div className="project-item">
              <div className="project-content-wrapper">
                <div className="project-title">
                  <h1 className="preview-title">My work.</h1>
                </div>
                <div className="items-container">
                  <div className="project-items">
    
                    <a className={`project-link ${index === 0 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(0);
                    }}>
                      {index === 0 ? activeIndex.active : activeIndex.inactive}
                      {projectConstructor(0)}
                    </a>
                  
                    <a className={`project-link ${index === 1 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(1);
                    }}>
                      {index === 1 ? activeIndex.active : activeIndex.inactive}
                      {projectConstructor(1)}
                    </a>
                  
                    <a className={`project-link ${index === 2 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(2);
                    }}>
                      {index === 2 ? activeIndex.active : activeIndex.inactive}
                      {projectConstructor(2)}
                    </a>
                  
                    <a className={`project-link ${index === 3 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(3);
                    }}>
                      {index === 3 ? activeIndex.active : activeIndex.inactive}
                      {projectConstructor(3)}
                    </a>
                  </div>
                  <div className="preview-sidebar"></div>
                </div>
              </div>
            </div>
            {/* -- Data -- */}
            <div className="project-description">
              <div className="preview-header">
                <h1 className="preview-title">Project Data.</h1>
              </div>
              <div className="data-wrapper">
                <div className="preview-sidebar">

                  <a className={`a-data-link ${dataIndex === 0 ? "data-active" : "data-inactive"}`}
                  id={radarHover ? "radar-data-active" : "radar-data-inactive"}
                  onClick={(e) => {
                    e.preventDefault();
                    setDataIndex(0);
                  }}>
                    <Image className="icon-radar-chart"
                    src={dataIndex === 0 ? RadarChartGreen : RadarChartWhite }
                    alt="Radar Chart"
                    width={50}
                    height={50} />
                  </a>

                  <a className={`a-data-link ${dataIndex === 1 ? "data-active" : "data-inactive"}`}
                  id={treemapHover ? "tree-map-active" : "tree-map-data-inactive"}
                  onClick={(e) => {
                    e.preventDefault();
                    setDataIndex(1);
                  }}>
                    <Image className="icon-tree-map"
                    src={dataIndex === 1 ? TreeMapGreen : TreeMapWhite }
                    alt="Tree Map"
                    width={50}
                    height={50} />
                  </a>

                </div>
                  <div className="project-data">
                    {dataIndex === 0 ? curRadarData : null}
                    {dataIndex === 1 ? curTreeMapData : null}
                  </div>
              </div>
            </div>
          </div>
          {/* -- Project Preview -- */}          
          <div className="project-preview">



            
            <div className="preview-btn-wrapper">
              <div className="preview-btns">
                <SecondaryButton
                altClass="github-btn"
                text="GitHub"
                link={curGithub}
                image={gitBtnHover ? GitHub_W : GitHub}
                width={35}
                height={35}
                />
                <SecondaryButton
                altClass="website-btn"
                text="Website"
                link={curWebsite}
                image={webBtnHover ? ExternalLink_W : ExternalLink}
                width={35}
                height={35}
                />
              </div>
            </div>

            <div className="project-stats-wrapper">
              <div className="project-stats">

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}