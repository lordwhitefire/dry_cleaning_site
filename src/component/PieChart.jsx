import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ deliveredPercent }) => {
  const ref = useRef();

  useEffect(() => {
    // Data
    const data = [
      { label: 'Undelivered', value:100 - deliveredPercent },
      { label: 'Delivered', value: deliveredPercent }
    ];

    // SVG dimensions
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    // Color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(['#ffffff', '#6261ff']);

    // Pie generator
    const pie = d3.pie()
      .value(d => d.value)
      .startAngle(-Math.PI / 0.8) // Start from the top (12 o'clock position)
      
    // Arc generator
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    // SVG container
    const svg = d3.select(ref.current);

    // Clear previous content
    svg.selectAll('*').remove();

    // Pie chart group
    const pieGroup = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Draw pie slices
    pieGroup.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));

    // Draw percentage text
    const percentageText = pieGroup.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', d => d.data.label === 'Delivered' ? '#ffffff' : '#6261ff') // Different colors for delivered and undelivered
      .style('font-size', '16px');

    // Display percentage in each slice
    percentageText.text(d => `${d.data.value}%`);
    
  }, [deliveredPercent]);

  return (
    <svg ref={ref} width={200} height={200}></svg>
  );
};

export default PieChart;
