import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiGridVertical } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaComment, LiaShapesSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";

const RightSidebar = () => {
  return (
    <div className="border border-gray-600 rounded-[30px] hidden xl:block fixed right-6 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col items-center gap-5 px-4 py-7 text-gray-400">
        <AiOutlineHome size={18} />
        <AiOutlineUser size={18} />
        <BsBriefcase size={18} />
        <FaBarsStaggered size={18} />
        <LiaShapesSolid size={18} />
        <BiGridVertical size={18} />
        <LiaComment size={18} />
        <IoMailOutline size={18} />
      </div>
    </div>
  );
};

export default RightSidebar;
