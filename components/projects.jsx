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
      <div className="projects-header">
        <h1 className="projects-header-text">
          <span id="project-P">P</span>rojects
        </h1>
      
      </div>
    </div>
  );
}