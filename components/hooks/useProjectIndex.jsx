import { useEffect, useState } from "react";
import { SolBoba, Portfolio, PortfolioBackend } from '../subComponents/projectData.jsx'



export default function useProjectIndex() {
    const { SolBoba_DataCharts } = SolBoba();
    const { Portfolio_DataCharts } = Portfolio();
    const { PortfolioBackend_DataCharts } = PortfolioBackend();

    const [index, setIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(0);
    
    const [curRadarData, setCurRadarData] = useState([]);
    const [curTreeMapData, setCurTreeMapData] = useState([]);

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
        }
    }, [index]);

    return { index, setIndex, dataIndex, setDataIndex, curRadarData, curTreeMapData }


}