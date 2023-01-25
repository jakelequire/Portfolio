import { useState, useEffect, useRef } from "react";
import Image from "next/image";
/* -- Hooks -- */
import useObserver from "./hooks/useCustomSmoothScroll.jsx";

// >------------------------------------------------------------------------------------------
export default function Projects() {
  const { ref } = useObserver();



  // >------------------------------------------------------------------------------------------
  return (
    <div className="projects-wrapper" id="projects" ref={ref.projects}>
      <div className="projects-container">
        <div className="project-list">

          <div className="project-heading">
            <div className="project-item">
              <div className="project-title">
                <h1 className="p-title">My work.</h1>
              </div>
              <div className="items-container">

              </div>
            </div>

            <div className="project-description">
            

            </div>
          </div>

          <div className="project-preview">
            <div className="preview-wrapper">
              <div className="preview-header">
                <h1 className="preview-title">Preview.</h1>
              </div>
              <div className="preview-container">
                <div className="preview-sidebar"></div>
              </div>
              </div>
          </div> 

        </div>
      </div>
    </div>
  );
}