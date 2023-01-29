import { useEffect, useState } from "react";
import { SolBoba, Portfolio, PortfolioBackend, ComingSoon } from '../subComponents/projectData.jsx'



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
        } else if (index === 1) {
            setCurWebsite(websites.portfolio);
            setCurGithub(gitHub.portfolio);
        } else if (index === 2) {
            setCurWebsite(websites.portfolio_backend);
            setCurGithub(gitHub.portfolio_backend);
        } else if (index === 3) {
            setCurWebsite(websites.comingsoon);
            setCurGithub(gitHub.comingsoon);
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
        curGithub 
    }
}