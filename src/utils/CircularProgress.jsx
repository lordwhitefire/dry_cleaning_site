import React from 'react';

const CircularProgress = ({ percentage }) => {
  const strokeWidth = 10;
  const radius = 50 - strokeWidth ;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <svg 
      className="w-24 h-24" 
    >
      <circle
        className="text-grey"
        stroke="#B3B2FF66"
        strokeWidth={strokeWidth}
        strokeLinecap="round" // Rounded stroke
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="text-midnight "
        stroke="#0100bb "
        strokeWidth={strokeWidth}
        strokeLinecap="round" // Rounded stroke
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset: progress }}
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <text
        className="text-center text-lg text-midnight font-bold"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {percentage}% 
      </text>
    </svg>
  );
};

export default CircularProgress;
