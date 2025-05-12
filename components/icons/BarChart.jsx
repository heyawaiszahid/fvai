const BarChart = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2H3.5V26H2V2Z" fill="#0A112D" />
      <path d="M2 24.5H26V26H2V24.5Z" fill="#0A112D" />
      <path d="M16.5127 24.5002H21.0127V4.5127L16.5127 9.5002V24.5002Z" fill="#4B66C6" />
      <path d="M9.9873 24.5H14.4873V9.5L9.9873 14.4875V24.5Z" fill="#25A13C" />
      <path d="M3.5 24.4998H8V14.4873L3.5 19.5123V24.4998Z" fill="#DB262A" />
      <path d="M14.4873 9.5H19.4748V24.5H14.4873V9.5Z" fill="#33BC40" />
      <path d="M8 14.4873H12.9875V24.4998H8V14.4873Z" fill="#FF4235" />
      <path d="M21.0127 4.5127H26.0002V24.5002H21.0127V4.5127Z" fill="#6787E7" />
    </svg>
  );
};

export default BarChart;
