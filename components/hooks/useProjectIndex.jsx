/**
 * @param {number} index - The index of the project to be displayed
 * 
 * @returns {object}    - The index of the project to be displayed, 
 * |||||||||||||||||    - the index of the data to be displayed, 
 * |||||||||||||||||    - the radar chart data, the treemap data, 
 * |||||||||||||||||    - the website link, 
 * |||||||||||||||||    - the github link, 
 * |||||||||||||||||    - and the name of the project
 * 
 */
import { useEffect, useState } from "react";
import { SolBoba, Portfolio, PortfolioBackend, ComingSoon } from '../subComponents/projectData.jsx'

import SolBoba_Image from '../../public/media/pictures/SolBobaHomepage-min.svg';
import Portfolio_Image from '../../public/media/pictures/portfolioPreview.svg';
import PortfolioBackend_Image from '../../public/media/pictures/portfoliobackend.svg';
import ComingSoon_Image from '../../public/media/pictures/comingsoon.svg';

export default function useProjectIndex() {
    const { SolBoba_DataCharts } = SolBoba();
    const { Portfolio_DataCharts } = Portfolio();
    const { PortfolioBackend_DataCharts } = PortfolioBackend();
    const { ComingSoon_DataCharts } = ComingSoon();

    const [index, setIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(0);
    
    const [curRadarData, setCurRadarData] = useState([]);
    const [curTreeMapData, setCurTreeMapData] = useState([]);

    const [curWebsite, setCurWebsite] = useState('');
    const [curGithub, setCurGithub] = useState('');
    const [curName, setCurName] = useState('');
    const [curImage, setCurImage] = useState();

    const websites = {
        solboba: "https://solboba.com",
        portfolio: "https://portfolio-2021.vercel.app",
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
            setCurImage(SolBoba_Image)
        } else if (index === 1) {
            setCurWebsite(websites.portfolio);
            setCurGithub(gitHub.portfolio);
            setCurName('Portfolio');
            setCurImage(Portfolio_Image)
        } else if (index === 2) {
            setCurWebsite(websites.portfolio_backend);
            setCurGithub(gitHub.portfolio_backend);
            setCurName('Portfolio Backend');
            setCurImage(PortfolioBackend_Image)
        } else if (index === 3) {
            setCurWebsite(websites.comingsoon);
            setCurGithub(gitHub.comingsoon);
            setCurName('Coming Soon');
            setCurImage(ComingSoon_Image)
        }
    }, [index]);
    
    useEffect(() => {
        if (index === 0) {
            setCurRadarData(SolBoba_DataCharts[0].radarChart);
            setCurTreeMapData(SolBoba_DataCharts[1].treeMap);
        } else if (index === 1) {
            setCurRadarData(Portfolio_DataCharts[0].radarChart);
            setCurTreeMapData(Portfolio_DataCharts[1].treeMap);
        } else if (index === 2) {
            setCurRadarData(PortfolioBackend_DataCharts[0].radarChart);
            setCurTreeMapData(PortfolioBackend_DataCharts[1].treeMap);
        } else if (index === 3) {
            setCurRadarData(ComingSoon_DataCharts[0].radarChart);
            setCurTreeMapData(ComingSoon_DataCharts[1].treeMap);
        }
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
        curImage
    }
}