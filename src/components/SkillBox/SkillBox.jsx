import React from "react";

const SkillBox = ({ skill }) => {
  return (
    <div
      className="text-center"
      data-aos={skill.animation}
      data-aos-duration="1100"
    >
      <div className="p-10 rounded-full border border-gray-600 w-[150px] h-[150px] flex justify-center items-center hover:border-[#28E98C] transition-colors duration-500 mb-5">
        <img src={skill?.image} alt={`${skill?.name} image`} />
      </div>
      <p className="text-white capitalize">{skill?.name}</p>
    </div>
  );
};

export default SkillBox;
