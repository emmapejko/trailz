
import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";

const LineChart = ({ eventData }) => {
  const [data, setData] = useState(eventData.map(subArr => subArr[1]));
  //console.log(data);

  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      //.domain(data.map((value, index) => index))
      .domain(eventData.map(subArr => subArr[0]))
      .range([0, 400])
      .padding(0.2);

    const yScale = scaleLinear()
      .domain([0, 3])
      .range([300, 0]);

    const xAxis = axisBottom(xScale).tickValues([...eventData.map(subArr => subArr[0])]); //.ticks(data.length)
    svg
      .select(".x-axis")
      .style("transform", "translateY(300px)")
      .call(xAxis);

    const yAxis = axisLeft(yScale).ticks(3);
    svg
      .select(".y-axis")
      .call(yAxis);

    svg.append("text")
      .attr("x", 200)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Events Attended by Activity Type");

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1, -1)")
      //.attr("x", (value, index) => xScale(index))
      .attr("x", (value, index) => 100 * index)
      .attr("y", -300)
      //.attr("width", xScale.bandwidth())
      .attr("width", 60)
      .transition()
      .attr("fill", 'forestGreen')
      .attr("height", value => yScale(3 - value));
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} style={{overflow: 'visible'}}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default LineChart;