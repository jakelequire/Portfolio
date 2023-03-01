import { ResponsiveRadar } from '@nivo/radar'
import radarChartData from '../../public/data/radarChartData.json'
import { ResponsiveTreeMap } from '@nivo/treemap'
import treeMapData from '../../public/data/treeMapData.json'


/**
 * @param {Number} index 
 * @returns 
 */
export function RadarData(index) {
	// Transform JSON data into an array of datasets
	const datasets = radarChartData.map((item) => {
	  const { name, data } = item
	  return {
		id: name,
		data: Object.entries(data).map(([language, values]) => ({
		  language,
		  ...values,
		})),
	  }
	})
  
	return (
	  <div className="chartData">
		<ResponsiveRadar
		  className="radarChart"
		  data={datasets[index].data}
		  keys={['JavaScript', 'CSS']}
		  indexBy="language"
		  valueFormat=">-.2f"
		  margin={{ top: 70, right: 80, bottom: 40, left: 40 }}
		  borderColor={{ from: 'color' }}
		  gridLabelOffset={25}
		  dotSize={5}
		  dotColor={{ theme: 'background' }}
		  dotBorderWidth={5}
		  blendMode="normal"
		  motionConfig="gentle"
		  colors={{ scheme: 'dark2' }}
		  legends={[
			{
			  anchor: 'top-right',
			  direction: 'column',
			  translateX: -170,
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
					itemTextColor: '#0affa9',
				  },
				},
			  ],
			},
		  ]}
		/>
	  </div>
	)
  }
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