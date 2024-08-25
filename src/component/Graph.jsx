import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph = ({ width, height }) => {
  const ref = useRef();

  useEffect(() => {
    const numHorizontalLines = 6; // Number of horizontal grid lines
    const numPoints = 35; // Number of data points

    // Generate random data points
    const data = d3.range(numPoints).map((d, i) => ({
      x: i / (numPoints - 1) * width,
      y: height / 2 + Math.sin(i / numPoints * 2 * Math.PI) * 50 + Math.random() * 20 // Add randomness for wavy effect
    }));

    // Create SVG container
    const svg = d3.select(ref.current);

    // Clear previous content
    svg.selectAll('*').remove();

    // Create line generator with higher tension
    const line = d3.line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCardinal.tension(0.5)); // Adjust tension for more curvy effect

    // Draw the line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#6261ff') // Apply line color
      .attr('stroke-width', 2)
      .attr('d', line);

    // Create a closed path for filling
    const areaPath = d3.area()
      .x(d => d.x)
      .y0(height)
      .y1(d => d.y)
      .curve(d3.curveCardinal.tension(0.5));

    // Append the filled area path
    svg.append('path')
      .datum(data)
      .attr('fill', 'url(#gradient)') // Apply gradient fill color
      .attr('d', areaPath);

    // Gradient definition
    svg.append('linearGradient')
      .attr('id', 'gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0).attr('y1', 0)
      .attr('x2', 0).attr('y2', height) // Adjust y2 to match height for vertical gradient
      .selectAll('stop')
      .data([
        {offset: '0%', color: '#6261ff'}, // Start color
        {offset: '100%', color: '#ffffff'} // End color
      ])
      .enter().append('stop')
      .attr('offset', d => d.offset)
      .attr('stop-color', d => d.color);

    // X-axis Labels (Months)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const xScale = d3.scaleBand()
      .domain(months)
      .range([0, width]);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Y-axis scale without the upper limit
    const yScale = d3.scaleLinear()
      .domain([0, height]) // Exclude the upper limit from the domain
      .range([height, 0]);

    const yAxis = d3.axisLeft(yScale)
      .ticks(numHorizontalLines)
      .tickSize(-width)
      .tickFormat('');

    svg.append('g')
      .attr('class', 'grid')
      .call(yAxis)
      .attr('stroke-dasharray', '2,2') // Apply dash pattern to make lines dotted

    // Title
    svg.append('text')
      .attr('x', 10) // Adjust x position for left alignment
      .attr('y', 20)
      .text('User Growth Overview')
      .attr('fill', '#000')
      .attr('text-anchor', 'start') // Align text to the left
      .style('font-size', '20px')
      .style('font-weight', 'bold');

    // Append green text and arrow icon
    svg.append('text')
      .attr('x', 10) // Adjust x position for left alignment
      .attr('y', 40)
      .text('↑ (+5%) more')
      .attr('fill', 'green')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Append black text for Jan 2024 beside the green text
    svg.append('text')
      .attr('x', 130) // Adjust x position to place beside the green text
      .attr('y', 40)
      .text('Jan 2024')
      .attr('fill', '#000')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

  }, [width, height]);

  return (
    <svg ref={ref} width={width} height={height + 50}></svg>
  );
};

export default Graph;
