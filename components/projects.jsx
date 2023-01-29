import { useState, useEffect, useRef } from "react";
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
    curGithub,
    curName,
    curImage
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

  const projects = [  
    {
      solboba: 
      <div className="P-item-container">
        <div className="P-header-wrapper">
          <h2 className="p-header">Sol Boba</h2>
        </div>
        <div className="item-description">
          <p className="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    },
    {
      portfolio:
      <div className="P-item-container">
        <div className="P-header-wrapper">
          <h2 className="p-header">Portfolio</h2>
        </div>
        <div className="item-description">
          <p className="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    },
    {
      portfolio_backend:
      <div className="P-item-container">
        <div className="P-header-wrapper">
          <h2 className="p-header">Portfolio Backend</h2>
        </div>
        <div className="item-description">
          <p className="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    },
    {
      coming_soon:
      <div className="P-item-container">
        <div className="P-header-wrapper">
          <h2 className="p-header">Coming Soon</h2>
        </div>
        <div className="item-description">
          <p className="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    }
  ]

// >------------------------------------------------------------------------------------------
  return (
    <div className="projects-wrapper" id="projects" ref={ref.projects}>
      <div className="projects-container">
        <div className="project-list">
          {/* -- List of Projects -- */}
          <div className="project-heading">
            <div className="project-item">
              <div className="project-content-wrapper">
                <div className="project-title">
                  <h1 className="p-title">My work.</h1>
                </div>
                <div className="items-container">
                  <div className="project-items">
    
                    <a className={`project-link ${index === 0 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(0);
                    }}>
                      {projects[0].solboba}
                      {index === 0 ? activeIndex.active : activeIndex.inactive}
                    </a>
                  
                    <a className={`project-link ${index === 1 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(1);
                    }}>
                      {projects[1].portfolio}
                      {index === 1 ? activeIndex.active : activeIndex.inactive}
                    </a>
                  
                    <a className={`project-link ${index === 2 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(2);
                    }}>
                      {projects[2].portfolio_backend}
                      {index === 2 ? activeIndex.active : activeIndex.inactive}
                    </a>
                  
                    <a className={`project-link ${index === 3 ? "_link-active" : "_link-inactive"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(3);
                    }}>
                      {projects[3].coming_soon}
                      {index === 3 ? activeIndex.active : activeIndex.inactive}
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
                <a className="preview-btn github-btn" href={curGithub}>
                  <Image className="icon-github"
                  src={gitBtnHover ? GitHub_W : GitHub}
                  alt="Github Icon"
                  width={50}
                  height={50} />
                  GitHub
                </a>
                <a className="preview-btn website-btn" 
                href={curWebsite}>
                  <Image className="icon-website"
                  src={webBtnHover ? ExternalLink_W : ExternalLink }
                  alt="Website Icon"
                  width={40}
                  height={40} />
                  Visit
                </a>
              </div>
            </div>
            
            <div className="preview-wrapper">
              <div className="preview-items-wrapper">
                <div className="custom_preview-sidebar"></div>
                <div className="project-preview-item">
                  <Image className="preview-image"
                  id={index === 0 || index === 1 ? "image-active" : "image-inactive" }
                  src={curImage}
                  alt="Project Preview"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}