import type { SVGProps } from 'react';

const Copy = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 1C2.34315 1 1 2.34315 1 4V13C1 14.6569 2.34315 16 4 16H6V10C6 7.79086 7.79086 6 10 6H16V4C16 2.34315 14.6569 1 13 1H4Z" />
      <path d="M11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11Z" />
    </svg>
  );
};

export default Copy;
