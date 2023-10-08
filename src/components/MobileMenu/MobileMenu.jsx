import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiGridVertical, BiLogoDevTo, BiLogoLinkedin } from "react-icons/bi";
import { BsBriefcase, BsDribbble, BsGithub, BsTwitter } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaFacebookF, LiaShapesSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const MobileMenu = ({ openMenu, toggleMenu }) => {
  return (
    <div
      className={`${
        openMenu ? "right-0 w-[75%] md:w-[25%]" : "-right-[350px] w-0"
      } transition-all duration-700  text-sm lg:text-base xl:max-w-[340px] fixed bg-[#191919] top-0 h-screen z-30`}
    >
      <div className="flex flex-col w-[70%] lg:w-[60%] mx-auto gap-5 px-4 py-7 text-gray-400">
        <div
          className="my-5 flex items-center justify-between"
          onClick={toggleMenu}
        >
          <h4 className="text-gray-400 text-lg">Menu</h4>
          <IoMdClose
            size={20}
            className="text-white cursor-pointer hidden xl:block"
          />
        </div>
        <ScrollLink
          to="home"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <AiOutlineHome size={18} className="group-hover:text-[#28E98C]" />{" "}
          <span className="hover:text-white">Home</span>
        </ScrollLink>

        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <AiOutlineUser size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">About</span>
        </ScrollLink>
        <ScrollLink
          to="resume"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <BsBriefcase size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">Resume</span>
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <FaBarsStaggered size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">Services</span>
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <LiaShapesSolid size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">Skills</span>
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <BiGridVertical size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">Portfolio</span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="group cursor-pointer flex gap-3 items-center"
          type="button"
        >
          <IoMailOutline size={18} className="group-hover:text-[#28E98C]" />
          <span className="hover:text-white">Contact</span>
        </ScrollLink>

        {/* Social */}
        <div className="my-14">
          <h4 className="text-gray-400 text-lg my-5">Social</h4>
          <div className="flex gap-5 items-center text-gray-400">
            <Link
              to="https://www.facebook.com/mohammedakhtar07/"
              target="_blank"
            >
              <button
                className="
               hover:text-[#28E98C] transition hover:scale-150 duration-300"
              >
                <LiaFacebookF size={14} />
              </button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mohammedakhtar7/"
              target="_blank"
            >
              <button
                className="
               hover:text-[#28E98C] transition hover:scale-150 duration-300"
              >
                <BiLogoLinkedin size={14} />
              </button>
            </Link>
            <Link to="https://github.com/Wixden" target="_blank">
              <button
                className="
               hover:text-[#28E98C] transition hover:scale-150 duration-300"
              >
                <BsGithub size={14} />
              </button>
            </Link>
            <Link to="https://dev.to/wixden" target="_blank">
              <button
                className="
               hover:text-[#28E98C] transition hover:scale-150 duration-300"
              >
                <BiLogoDevTo size={14} />
              </button>
            </Link>
          </div>
        </div>
        {/* Social End */}
      </div>
    </div>
  );
};

export default MobileMenu;
