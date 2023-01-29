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

    return { index, setIndex, dataIndex, setDataIndex, curRadarData, curTreeMapData }


}