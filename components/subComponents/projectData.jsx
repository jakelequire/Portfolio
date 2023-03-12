import { ResponsiveTreeMap } from '@nivo/treemap'
import treeMapData from '../../public/data/treeMapData.json'
import { ResponsiveHeatMap } from '@nivo/heatmap'
import heatMapData from '../../public/data/heatMapData.json'
/**
 * @param {Number} index 
 * 
 * @returns {Object}
 */
export function TreeMapData(index) {
	const treeMapCharts = treeMapData.map((data) => {
	return (
		<div key={index} className="chartData">
			<ResponsiveTreeMap
				className="treeMapChart"
				data={data.TreeMapData}
				identity="name"
				value="loc"
				valueFormat= " >-.2f"
				innerPadding={5}
				outerPadding={5}
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
				parentLabelSize={25}
				parentLabelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
				colors={{ scheme: 'category10' }}
				nodeOpacity={0.1}
				borderWidth={2}
				borderColor={{ from: 'color', modifiers: [['darker', 0]] }}
			/>
		</div>
	)
  })

  return <div>{treeMapCharts[index]}</div>
}

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
		axisRight={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'country',
			legendPosition: 'middle',
			legendOffset: 70
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'country',
			legendPosition: 'middle',
			legendOffset: -72
		}}
		colors={{
			type: 'diverging',
			scheme: 'cool',
			minValue: -100000,
			maxValue: 100000,
			divergeAt: 0.5
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