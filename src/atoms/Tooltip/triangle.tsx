import React from 'react';

import styled from '_styled-components';

const Svg = styled.svg`
  position: relative;
  top: -0.25em;
  left: 50%;
  transform: translateX(-50%);
`;

export default () => (
  <Svg
    width="29px"
    height="21px"
    viewBox="0 0 29 21"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {/* Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch */}
    <title>Group 8</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <filter
        x="-92.1%"
        y="-194.4%"
        width="284.2%"
        height="488.9%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="3"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.07 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      id="Styleguide"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Group-8"
        filter="url(#filter-1)"
        transform="translate(5.000000, 3.000000)"
        fill="#FFFFFF"
      >
        <path
          d="M9.5,0.688750123 L1.2547918,8.5 L17.7452082,8.5 L9.5,0.688750123 Z"
          id="Triangle"
          stroke="#B9C9D3"
          transform="translate(9.500000, 4.500000) scale(1, -1) translate(-9.500000, -4.500000) "
        />
        <polygon
          id="Triangle"
          transform="translate(9.491150, 3.850000) scale(1, -1) translate(-9.491150, -3.850000) "
          points="9.5 -9.1655572e-12 17.5410767 7.7 1.44122314 7.7"
        />
      </g>
    </g>
  </Svg>
);
