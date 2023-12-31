import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiGridVertical } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaComment, LiaShapesSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const RightSidebar = () => {
  return (
    <div className="border border-gray-600 rounded-[30px] hidden xl:block fixed right-6 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col items-center gap-5 px-4 py-7 text-gray-400">
        <ScrollLink
          to="home"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Home"
        >
          <AiOutlineHome size={18} />
        </ScrollLink>

        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="About"
        >
          <AiOutlineUser size={18} />
        </ScrollLink>
        <ScrollLink
          to="resume"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Resume"
        >
          <BsBriefcase size={18} />
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Services"
        >
          <FaBarsStaggered size={18} />
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Skills"
        >
          <LiaShapesSolid size={18} />
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Portfolio"
        >
          <BiGridVertical size={18} />
        </ScrollLink>
        {/* Todo: Add testimonials and pricing */}
        {/* <ScrollLink
          to="testimonials"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Testimonials"
        >
          <LiaComment size={18} />
        </ScrollLink> */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="hover:text-[#28E98C] tooltip tooltip-left cursor-pointer"
          type="button"
          data-tip="Contact"
        >
          <IoMailOutline size={18} />
        </ScrollLink>
      </div>
    </div>
  );
};

export default RightSidebar;
