import React from "react";

const Sparkline = ({ data = [], isPositive = true, width = 80, height = 30 }) => {
  // Default data agar koi data na ho
  const defaultData = [10, 20, 15, 25, 30, 20, 35, 40, 35, 45];
  const sparklineData = data.length > 0 ? data : defaultData;

  // Normalize data to fit within SVG bounds
  const min = Math.min(...sparklineData);
  const max = Math.max(...sparklineData);
  const range = max - min || 1;

  const points = sparklineData.map((value, index) => {
    const x = (index / (sparklineData.length - 1 || 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(" L ")}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={`gradient-${isPositive ? "green" : "red"}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            stopColor={isPositive ? "#22c55e" : "#ef4444"}
            stopOpacity="0.3"
          />
          <stop
            offset="100%"
            stopColor={isPositive ? "#22c55e" : "#ef4444"}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path
        d={pathData}
        fill="none"
        stroke={isPositive ? "#22c55e" : "#ef4444"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`${pathData} L ${width},${height} L 0,${height} Z`}
        fill={`url(#gradient-${isPositive ? "green" : "red"})`}
        opacity="0.3"
      />
    </svg>
  );
};

export default Sparkline;

