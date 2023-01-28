import { useState, useEffect, useRef } from "react";
import Image from "next/image.js";
import { ResponsiveRadar } from '@nivo/radar'
/* -- Data -- */
import { SolBoba } from './subComponents/projectData.jsx'
/* -- Hooks -- */
import useObserver from "./hooks/useCustomSmoothScroll.jsx";
import useProjectIndex from "./hooks/useProjectIndex.jsx";
/* SVGs */
import RadarChart from '../public/media/icons/web-media/radar-chart.svg'
import TreeMap from '../public/media/icons/web-media/treemap-chart.svg'
// >------------------------------------------------------------------------------------------
export default function Projects() {
  const { ref } = useObserver();
  const { index, setIndex, dataIndex, setDataIndex} = useProjectIndex();

  const { SolBoba_DataCharts } = SolBoba();

  const [iconHover, setIconHover] = useState(false);

  useEffect(() => {
    const icon = document.querySelector('.icon-radar-chart');
    icon.addEventListener('mouseover', () => {
      setIconHover(true);
    });
    icon.addEventListener('mouseout', () => {
      setIconHover(false);
    });
  }, []);


  const activeIndex = {
    active: <span className="project-link-active"></span>,
    inactive: <span className="project-link-inactive"></span>
  }

/* -- Project Data -- */
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
          <h2 className="p-header">Protfolio Backend</h2>
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
              <div className="project-title">
                <h1 className="p-title">My work.</h1>
              </div>
              <div className="items-container">
                <div className="project-items">

                  <a className="project-link _link-active"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(0);
                  }}>
                    {projects[0].solboba}
                    <span className="project-link-active"></span>
                  </a>

                  <a className="project-link _link-inactive"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(1);
                  }}>
                    {projects[1].portfolio}
                  </a>

                  <a className="project-link _link-inactive"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(2);
                  }}>
                    {projects[2].portfolio_backend}
                  </a>

                  <a className="project-link _link-inactive"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(3);
                  }}>
                    {projects[3].coming_soon}
                  </a>
                </div>
                <div className="preview-sidebar"></div>
              </div>
            </div>
            {/* -- Data -- */}
            <div className="project-description">
              <div className="preview-header">
                <h1 className="preview-title">Project Data.</h1>
              </div>
              <div className="data-wrapper">
                <div className="preview-sidebar">
                  <a className="a-data-link"
                  id={iconHover ? "data-active" : "data-inactive"}
                  onClick={(e) => {
                    e.preventDefault();
                    setDataIndex(0);
                  }}>
                    <Image className="icon-radar-chart"
                    src={RadarChart}
                    alt="Radar Chart"
                    width={50}
                    height={50} />
                  </a>
                  <a className="">
                    <Image className="icon-tree-map"
                    src={TreeMap}
                    alt="Tree Map"
                    width={50}
                    height={50} />
                  </a>
                </div>
                  <div className="project-data">
                    { SolBoba_DataCharts[0].radarChart }
                  </div>
              </div>
            </div>
          </div>
          {/* -- Project Preview -- */}          
          <div className="project-preview">
            <div className="preview-wrapper">

            </div>
          </div> 

        </div>
      </div>
    </div>
  );
}