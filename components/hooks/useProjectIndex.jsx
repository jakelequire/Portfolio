/**
 * @param {number} index - The index of the project to be displayed
 * 
 * @returns {object}    - The index of the project to be displayed, 
 * |||||||||||||||||    - the index of the data to be displayed, 
 * |||||||||||||||||    - the radar chart data, the treemap data, 
 * |||||||||||||||||    - the website link, 
 * |||||||||||||||||    - the github link, 
 * |||||||||||||||||    - and the name of the project
 */
import { useEffect, useState } from "react";
import { HeatMapData, TreeMapData } from '../subComponents/projectData.jsx'

export default function useProjectIndex() {
    const [index, setIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(0);
    
    const [curRadarData, setCurRadarData] = useState([]);
    const [curTreeMapData, setCurTreeMapData] = useState([]);

    const [curWebsite, setCurWebsite] = useState('');
    const [curGithub, setCurGithub] = useState('');
    const [curName, setCurName] = useState('');

    const websites = {
        solboba: "https://solboba.com",
        portfolio: "https://jakelequire.dev",
        portfolio_backend: "https://portfolio-backend-2021.herokuapp.com",
        comingsoon: "https://comingsoon-2021.vercel.app"
      }
      const gitHub = {
        solboba: "https://github.com/jakelequire/SolBoba",
        portfolio: "https://github.com/jakelequire/Portfolio",
        portfolio_backend: "https://github.com/jakelequire/portfolio-backend"
      }
    
    useEffect(() => {
        if (index === 0) {
            setCurWebsite(websites.solboba);
            setCurGithub(gitHub.solboba);
            setCurName('SolBoba');
        } else if (index === 1) {
            setCurWebsite(websites.portfolio);
            setCurGithub(gitHub.portfolio);
            setCurName('Portfolio');
        } else if (index === 2) {
            setCurWebsite(websites.portfolio_backend);
            setCurGithub(gitHub.portfolio_backend);
            setCurName('Portfolio Backend');
        } else if (index === 3) {
            setCurWebsite(websites.comingsoon);
            setCurGithub(gitHub.comingsoon);
            setCurName('Coming Soon');
        }
    }, [index]);

    useEffect(() => {
        const radarData = HeatMapData(index);
        const treeMapData = TreeMapData(index);

        setCurRadarData([radarData]);
        setCurTreeMapData([treeMapData]);
    }, [index]);

    return {
        index, 
        setIndex, 
        dataIndex, 
        setDataIndex, 
        curRadarData, 
        curTreeMapData, 
        curWebsite, 
        curGithub,
        curName,
    }
}