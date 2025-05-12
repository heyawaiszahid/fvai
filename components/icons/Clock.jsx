const Clock = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.958 26.2689C42.4128 22.2863 41.6603 18.259 39.7982 14.7093C37.9361 11.1596 35.0504 8.25135 31.5153 6.36173C27.9802 4.47212 23.9588 3.68834 19.9728 4.11208C15.9868 4.53581 12.2201 6.14749 9.16128 8.73808C6.10243 11.3287 3.89261 14.7786 2.81842 18.6404C1.74424 22.5023 1.85527 26.5978 3.13712 30.3957C4.41896 34.1937 6.81246 37.5188 10.0072 39.9399C13.2019 42.3609 17.0504 43.7662 21.0535 43.9733"
        stroke="#4169E1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0869 12.8887V23.9998L28.7536 30.6665M28.7536 39.5554L33.1981 43.9998L42.087 35.1109"
        stroke="#4169E1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect y="4" width="12" height="12" rx="6" fill="#4169E1" fillOpacity="0.64" />
    </svg>
  );
};

export default Clock;
