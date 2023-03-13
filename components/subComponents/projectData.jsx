import { ResponsiveHeatMap } from '@nivo/heatmap'
import heatMapData from '../../public/data/heatMapData.json'
import { ResponsivePie } from '@nivo/pie'
import pieData from '../../public/data/pieData.json'

export function HeatMapData(index) {
	const heatMapCharts = heatMapData.map((data) => {
		const { name } = data
		return {
			id: name,
			data: Object.entries(data).map(([language, values]) => ({
			language,
			...values,
			})),
		}
	})

	return (
	<ResponsiveHeatMap
		data={heatMapCharts[index].data}
		margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
		valueFormat=">-.2s"
		xInnerPadding={0.1}
		yInnerPadding={0.1}
		axisTop={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: -90,
			legend: '',
			legendOffset: 46
		}}
		colors={{
			type: 'diverging',
			scheme: 'cool',
			minValue: 0,
			maxValue: 50000,
			divergeAt: 0.2
		}}
		emptyColor="#555555"
		legends={[
			{
				anchor: 'bottom',
				translateX: 0,
				translateY: 30,
				length: 400,
				thickness: 8,
				direction: 'row',
				tickPosition: 'after',
				tickSize: 3,
				tickSpacing: 4,
				tickOverlap: false,
				tickFormat: '>-.2s',
				title: 'Value →',
				titleAlign: 'start',
				titleOffset: 4
			}
		]}
	/>
	)
}
/*
const pieCharts: {
    id: any;
    data: any[];
}[]
*/
export function MyResponsivePie(index) {
	const pieCharts = pieData.map((data) => {
		const { name } = data
		return {
			id: name,
			data: Object.entries(data).map(([language, values]) => ({
			language,
			...values,
			})),
		}
	})
	
	console.log("<MyResponsivePie> `pieCharts` ",pieCharts)
	const pieIndex = pieCharts[index];
	return (
		<ResponsivePie
        data= {pieIndex.data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pink_yellowGreen' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#656565"
		arcLinkLabelsOffset={18}
        arcLinkLabelsDiagonalLength={0}
        arcLinkLabelsStraightLength={0}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#fff'
                        }
                    }
                ]
            }
        ]}
    />
	)
}