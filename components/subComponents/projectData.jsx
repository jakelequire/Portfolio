import { ResponsiveRadar } from '@nivo/radar'
import { ResponsiveTreeMap } from '@nivo/treemap'
/* Data Imports */
import radar_SolBoba_Data from '../../public/data/radar_SolBoba.json'
import treemap_SolBoba_Data from '../../public/data/treemap_SolBoba.json'

import radar_Portfolio_Data from '../../public/data/radar_Portfolio.json'
import treemap_Portfolio_Data from '../../public/data/treemap_Portfolio.json'

import radar_PortfolioBackend_Data from '../../public/data/radar_PortfolioBacked.json'
import treemap_PortfolioBackend_Data from '../../public/data/treemap_PortfolioBackend.json'

import radar_ComingSoon_Data from '../../public/data/radar_ComingSoon.json'
import treemap_ComingSoon_Data from '../../public/data/treemap_ComingSoon.json'

/************************/
/* ----  Sol Boba  ---- */
/************************/
export function SolBoba() {
   const SolBoba_DataCharts = [
     	{ /* -- Radar Chart -- */
       	radarChart: 
			<div className="chartData">
           <ResponsiveRadar
			  		className="radarChart"
           		data={radar_SolBoba_Data}
           		keys={[ 'lines', 'files', 'percentage' ]}
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
           			         itemTextColor: '#0affa9'
           			      }
           			     }
           			   ]
           			}
           		]}
           />
			</div>
       	},
       	{ /* -- TreeMap -- */
        		treeMap:
				<div className="chartData">
              <ResponsiveTreeMap
               	data={treemap_SolBoba_Data}
               	identity="name"
               	value="loc"
               	valueFormat=" >-.2s"
               	innerPadding={5}
               	outerPadding={5}
               	margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
               	labelTextColor={{
                     from: 'color',
                     modifiers: [
                        [
                          'darker',
                          1.5
                        ]
                     ]
                 	}}
                 parentLabelSize={25}
                 parentLabelTextColor={{
                     from: 'color',
                     modifiers: [
                        [
                          'darker',
                          2
                        ]
                     ]
                 }}
                 colors={{ scheme: 'category10' }}
                 nodeOpacity={0.1}
                 borderWidth={3}
                 borderColor={{
                     from: 'color',
                     modifiers: [
                        [
                           'darker',
                           '0'
                        ]
                     ]
                 }}
              	/>
				</div>
       	}
	]
   return { SolBoba_DataCharts }
}
/*************************/
/* ----  Portfolio  ---- */
/*************************/
export function Portfolio() {
	const Portfolio_DataCharts = [
		{ /* -- Radar Chart -- */
		  radarChart: 
		 <div className="chartData">
			<ResponsiveRadar
					className="radarChart"
					data={radar_Portfolio_Data}
					keys={[ 'lines', 'files', 'percentage' ]}
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
									itemTextColor: '#0affa9'
								}
							  }
							]
						}
					]}
			/>
		 </div>
		  },
		  { /* -- TreeMap -- */
				treeMap:
			 <div className="chartData">
				<ResponsiveTreeMap
					 data={treemap_Portfolio_Data}
					 identity="name"
					 value="loc"
					 valueFormat=" >-.2s"
					 innerPadding={5}
					 outerPadding={5}
					 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
					 labelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								1.5
							 ]
						 ]
						}}
					parentLabelSize={25}
					parentLabelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								2
							 ]
						 ]
					}}
					colors={{ scheme: 'category10' }}
					nodeOpacity={0.1}
					borderWidth={3}
					borderColor={{
						 from: 'color',
						 modifiers: [
							 [
								 'darker',
								 '0'
							 ]
						 ]
					}}
					/>
			 </div>
		  }
 ]
 return { Portfolio_DataCharts }
}
/********************************/
/* ---- Portfolio Backend  ---- */
/********************************/
export function PortfolioBackend() {
	const PortfolioBackend_DataCharts = [
		{ /* -- Radar Chart -- */
		  radarChart: 
		 <div className="chartData">
			<ResponsiveRadar
					className="radarChart"
					data={radar_PortfolioBackend_Data}
					keys={[ 'lines', 'files', 'percentage' ]}
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
									itemTextColor: '#0affa9'
								}
							  }
							]
						}
					]}
			/>
		 </div>
		  },
		  { /* -- TreeMap -- */
				treeMap:
			 <div className="chartData">
				<ResponsiveTreeMap
					 data={treemap_PortfolioBackend_Data}
					 identity="name"
					 value="loc"
					 valueFormat=" >-.2s"
					 innerPadding={5}
					 outerPadding={5}
					 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
					 labelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								1.5
							 ]
						 ]
						}}
					parentLabelSize={25}
					parentLabelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								2
							 ]
						 ]
					}}
					colors={{ scheme: 'category10' }}
					nodeOpacity={0.1}
					borderWidth={3}
					borderColor={{
						 from: 'color',
						 modifiers: [
							 [
								 'darker',
								 '0'
							 ]
						 ]
					}}
					/>
			 </div>
		  }
 ]
 return { PortfolioBackend_DataCharts }
}
/***************************/
/* ----  Coming Soon  ---- */
/***************************/
export function ComingSoon() {
	const ComingSoon_DataCharts = [
		{ /* -- Radar Chart -- */
		  radarChart: 
		 <div className="chartData">
			<ResponsiveRadar
					className="radarChart"
					data={radar_ComingSoon_Data}
					keys={[ 'lines', 'files', 'percentage' ]}
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
									itemTextColor: '#0affa9'
								}
							  }
							]
						}
					]}
			/>
		 </div>
		  },
		  { /* -- TreeMap -- */
				treeMap:
			 <div className="chartData">
				<ResponsiveTreeMap
					 data={treemap_ComingSoon_Data}
					 identity="name"
					 value="loc"
					 valueFormat=" >-.2s"
					 innerPadding={5}
					 outerPadding={5}
					 margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
					 labelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								1.5
							 ]
						 ]
						}}
					parentLabelSize={25}
					parentLabelTextColor={{
						 from: 'color',
						 modifiers: [
							 [
								'darker',
								2
							 ]
						 ]
					}}
					colors={{ scheme: 'category10' }}
					nodeOpacity={0.1}
					borderWidth={3}
					borderColor={{
						 from: 'color',
						 modifiers: [
							 [
								 'darker',
								 '0'
							 ]
						 ]
					}}
					/>
			 </div>
		  }
 	]
 return { ComingSoon_DataCharts }
}