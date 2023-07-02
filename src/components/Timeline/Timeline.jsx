import React from "react";

const Timeline = ({ children, animation }) => {
  return (
    <ol
      className="relative border-l border-gray-200 dark:border-gray-700"
      data-aos={animation}
      data-aos-duration="1100"
    >
      <li className="pb-[68px] pl-[74px] group">
        <div className="absolute w-4 h-4 bg-neutral-200 rounded-full  -left-[8px] border border-white dark:border-neutral-900 dark:bg-neutral-700 group-hover:bg-[#28E98C] transition-colors duration-500"></div>
        {children}
      </li>
    </ol>
  );
};

export default Timeline;
