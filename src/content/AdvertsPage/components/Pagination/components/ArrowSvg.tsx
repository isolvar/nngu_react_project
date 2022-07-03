import React, { FC } from 'react';

interface IProps {
  id: string;
}

const ArrowSvg: FC<IProps> = ({ id }) => {
  switch (id) {
    case 'left':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 7L7 1"
            stroke="#2C2D2E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'right':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L7 7L1 13"
            stroke="#2C2D2E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default ArrowSvg;
