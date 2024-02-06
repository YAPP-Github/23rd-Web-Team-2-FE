import type { SVGProps } from 'react';

const Bookmark = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 2C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V21C4 21.3746 4.20935 21.7178 4.54242 21.8892C4.87549 22.0606 5.27642 22.0315 5.58124 21.8137L12 17.2289L18.4188 21.8137C18.7236 22.0315 19.1245 22.0606 19.4576 21.8892C19.7907 21.7178 20 21.3746 20 21V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2H7Z" />
    </svg>
  );
};

export default Bookmark;
