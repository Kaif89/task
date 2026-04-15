import React from 'react';

const GithubIcon = ({ size = 24, color = 'currentColor', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.5-1.5 6.5-7.17a5.5 5.5 0 0 0-1.4-3.6 5.2 5.2 0 0 0-.1-3.6s-1.1-.35-3.6 1.35a12.5 12.5 0 0 0-6.6 0C6.15 1.5 5.05 1.85 5.05 1.85a5.2 5.2 0 0 0-.1 3.6 5.5 5.5 0 0 0-1.4 3.6c0 5.66 3.32 6.78 6.49 7.16A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

export default GithubIcon;
