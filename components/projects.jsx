import { useState, useEffect, useRef } from "react";
import { ResponsiveRadar } from '@nivo/radar'
import data from '../public/data/chartData.json'
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
              <div className="preview-header">
                <h1 className="preview-title">Data.</h1>
              </div>
              <div className="data-wrapper">
                <div className="preview-sidebar"></div>
                <div className="project-data">
                <ResponsiveRadar
                  data={data}
                  keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                  indexBy="language"
                  valueFormat=">-.2f"
                  margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                  borderColor={{ from: 'color' }}
                  gridLabelOffset={36}
                  dotSize={10}
                  dotColor={{ theme: 'background' }}
                  dotBorderWidth={2}
                  colors={{ scheme: 'nivo' }}
                  blendMode="multiply"
                  motionConfig="wobbly"
                  legends={[
                      {
                          anchor: 'top-left',
                          direction: 'column',
                          translateX: -50,
                          translateY: -40,
                          itemWidth: 80,
                          itemHeight: 20,
                          itemTextColor: '#999',
                          symbolSize: 12,
                          symbolShape: 'circle',
                          effects: [
                              {
                                  on: 'hover',
                                  style: {
                                      itemTextColor: '#000'
                                  }
                              }
                          ]
                      }
                  ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-preview">
            <div className="preview-wrapper">

              </div>
          </div> 

        </div>
      </div>
    </div>
  );
}