/* eslint-disable */

import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const BarChart = ({ eventData }) => (
  <Chart
    width={'600px'}
    height={'400px'}
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={[
      [
        'Activity',
        'Number of Events',
      ],
      ...eventData
    ]}
    options={{
      title: 'Events Attended by Activity Type',
      width: 600,
      height: 400,
      bar: { groupWidth: '95%' },
      legend: { position: 'none' },
      colors: [ 'forestGreen' ],
      hAxis : {
        title: 'Number of Events',
        minValue: 0,
      },
      vAxis: {
        title: 'Activity Type'
      }
    }}
  />
)

export default BarChart;

// const BarChart = ({width, height, data, categories}) => {
//   const ref = useRef();

//   const draw = () => {
//     const svg = d3.select(ref.current);
//     const selection = svg.selectAll('rect').data(data);
//     const yScale = d3.scaleLinear()
//       .domain([0, d3.max(data)])
//       .range([0, height - 100]);
//     const xScale = d3.scaleLinear()
//       .domain(categories);
//     const yAxis = d3.axisLeft()
//       .scale(yScale);

//     svg.append('text')
//       .attr('transform', 'translate(100, 0)')
//       .attr('x', 50)
//       .attr('y', 50)
//       .attr('font-size', '24px')
//       .text('Events Attended by Activity Type');

//     selection
//       .transition().duration(300)
//       .attr('height', (d) => yScale(d))
//       .attr('y', (d) => height - yScale(d));

//     selection
//       .enter()
//       .append('rect')
//       .attr('x', (d, i) => i * 45)
//       .attr('y', (d) => height)
//       .attr('width', 40)
//       .attr('height', 0)
//       .attr('fill', 'orange')
//       .transition()
//       .duration(300)
//       .attr('height', (d) => yScale(d))
//       .attr('y', (d) => height - yScale(d))

//     selection
//       .exit()
//       .transition().duration(300)
//       .attr('y', (d) => height)
//       .attr('height', 0)
//       .remove();

//     selection.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(xScale))
//       .append('text')
//       .attr('y', height - 250)
//       .attr('x', width - 100)
//       .attr('text-anchor', 'end')
//       .attr('stroke', 'black')
//       .text('Activity');
//   };

//   useEffect(() => {
//     const svg = d3.select(ref.current)
//       .attr('width', width)
//       .attr('height', height)
//       .style('border', '1px solid black');
//   }, []);

//   useEffect(() => {
//     draw();
//   }, [data]);

//   return (
//     <div className="barChart" style={{ margin: '20px' }}>
//       <svg ref={ref} />
//       {
//         categories.map((category, i) => <div key={i}>{category}</div>)
//       }
//     </div>

//   );

// };


// export default BarChart;
