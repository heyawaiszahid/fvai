const Progress = ({ size = 100, thickness = 10, score = 90 }) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * score) / 100;
  const viewBoxSize = size + thickness;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth={thickness}
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
        r={radius}
        fill="transparent"
      ></circle>
      <circle
        className="text-primary stroke-current"
        strokeWidth={thickness}
        strokeLinecap="square"
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
        r={radius}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
      ></circle>
    </svg>
  );
};

export default Progress;
