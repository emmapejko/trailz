import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

const BarChart = ({ width, height, data, categories }) => {
  const ref = useRef();

  const draw = () => {
    const svg = d3.select(ref.current);
    const selection = svg.selectAll('rect').data(data);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);
    const xScale = d3.scaleLinear()
      .domain(categories);
    const yAxis = d3.axisLeft()
      .scale(yScale);

    svg.append('text')
      .attr('transform', 'translate(100, 0)')
      .attr('x', 50)
      .attr('y', 50)
      .attr('font-size', '24px')
      .text('Events Attended by Activity Type');

    selection
      .transition().duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 45)
      .attr('y', (d) => height)
      .attr('width', 40)
      .attr('height', 0)
      .attr('fill', 'orange')
      .transition()
      .duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .exit()
      .transition().duration(300)
      .attr('y', (d) => height)
      .attr('height', 0)
      .remove();

    selection.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('y', height - 250)
      .attr('x', width - 100)
      .attr('text-anchor', 'end')
      .attr('stroke', 'black')
      .text('Activity');
  };

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid black');
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  return (
    <div className="barChart" style={{ margin: '20px' }}>
      <svg ref={ref} />
    </div>

  );
};

export default BarChart;
