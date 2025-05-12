const Money = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 12V36M30 19C30 16.24 27.314 14 24 14C20.686 14 18 16.24 18 19C18 21.76 20.686 24 24 24C27.314 24 30 26.24 30 29C30 31.76 27.314 34 24 34C20.686 34 18 31.76 18 29"
        stroke="#4169E1"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6.67603C17.0389 4.91748 20.489 3.99424 24 4.00003C35.046 4.00003 44 12.954 44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 20.358 4.974 16.94 6.676 14"
        stroke="#4169E1"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="3" y="32" width="12" height="12" rx="6" fill="#4169E1" fillOpacity="0.64" />
    </svg>
  );
};

export default Money;
