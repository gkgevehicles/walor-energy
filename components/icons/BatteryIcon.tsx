
import React from 'react';

const BatteryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 7H14.5V5.5C14.5 4.67 13.83 4 13 4H11C10.17 4 9.5 4.67 9.5 5.5V7H8C6.9 7 6 7.9 6 9V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V9C18 7.9 17.1 7 16 7ZM11.5 14.5H10V16H14V14.5H12.5V13H14V11.5H10V13H11.5V14.5Z" />
  </svg>
);

export default BatteryIcon;
