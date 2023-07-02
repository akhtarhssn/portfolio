import React from "react";

const TimelineItem = ({ date, title, subTitle }) => {
  return (
    <div>
      <p
        className={`pb-5 text-neutral-400 dark:text-neutral-500 group-hover:text-[#28E98C] transition-all duration-500 ${
          date ? "block" : "hidden"
        }`}
      >
        {date && date}
      </p>
      <h4 className="text-2xl text-neutral-900 dark:text-white mb-1.5">
        {title ? title : "No Title Found"}
      </h4>
      <p className="mb-5 text-[13px] font-normal text-neutral-500 dark:text-neutral-400">
        {subTitle ? subTitle : "No data found"}
      </p>
    </div>
  );
};

export default TimelineItem;
