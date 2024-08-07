import React from "react";

const LineSeparator: React.FC = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1">
          <stop offset="0%" style={{ stopColor: "black", stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "black", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path
        d="M10 50 Q 100 10 190 50 Q 100 90 10 50"
        stroke="url(#grad1)"
        strokeWidth="10"
        fill="transparent"
      />
    </svg>
  );
};

export default LineSeparator;
