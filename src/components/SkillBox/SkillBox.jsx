import React, { useState } from "react";
import loading from "../../assets/loading.png";

const SkillBox = ({ skill }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className="text-center"
      data-aos={skill.animation}
      data-aos-duration="1100"
    >
      <div className="p-5 rounded-full border border-gray-600 w-[80px] h-[80px] flex justify-center items-center hover:border-[#28E98C] transition-colors duration-500 mb-5">
        <img
          width={100}
          height={100}
          src={imageLoaded ? skill?.image : loading}
          alt={`${skill?.name} image`}
          data-src={skill?.image}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <p className="text-white capitalize">{skill?.name}</p>
    </div>
  );
};

export default SkillBox;
