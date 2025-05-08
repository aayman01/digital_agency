import React from 'react';
// import arrow from '../assets/Arroup.svg'
const ViewMoreButton = () => {
    return (
      <button>
        View more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M8.5 24L24.5 8M24.5 8H12.5M24.5 8V20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
};

export default ViewMoreButton;