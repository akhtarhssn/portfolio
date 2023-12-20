import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { BiLogoDevTo, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { LiaFacebookF } from "react-icons/lia";
import loading from "../../assets/loading.png";
import profile from "../../assets/images/profile.png";
import { useState } from "react";

const LeftSidebar = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      {/* Sidebar Card */}
      <div className="w-full sm:w-2/3 md:w-[360px] xl:max-w-[750px] sm:mx-auto md:mx-0 xl:mx-auto p-4 lg:p-8 border border-gray-600 rounded-[30px] text-white xl:fixed xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:left-6 mt-20 xl:mt-0 bg-[#212121]">
        <div className="mb-12 flex justify-center">
          <img
            src={imageLoaded ? profile : loading}
            data-src={profile}
            alt="Portfolio User image"
            className="rounded-[30px] h-2/3 xl:h-[220px] xl:w-[300px] w-full object-cover xl:object-center"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="text-center">
          <div className="sm:text-xl mb-4">
            <p className="hover:text-[#28E98C] mb-2">
              <a href="mailto:contact@aktarhossain.com">
                contact@aktarhossain.com
              </a>
            </p>
            <p className="text-base text-gray-300">Sylhet, Bangladesh</p>
          </div>
          {/*  copyright */}
          <p className="text-sm text-gray-400 mb-4">
            &copy; 2023 Akhtar. All Rights Reserved
          </p>
          {/* Social */}
          <div className="flex gap-2 items-center text-gray-400 mb-[30px] justify-center">
            <Link to="https://www.facebook.com/aktarhssn/" target="black">
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition text-sm lg:text-xl p-2 lg:p-3">
                <LiaFacebookF />
              </button>
            </Link>
            <Link to="https://www.linkedin.com/in/akhtarhssn/" target="black">
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition text-sm lg:text-xl p-2 lg:p-3">
                <BiLogoLinkedin />
              </button>
            </Link>
            <Link to="https://github.com/akhtarhssn" target="black">
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition text-sm lg:text-xl p-2 lg:p-3">
                <BsGithub />
              </button>
            </Link>
            <Link to="https://dev.to/akhtar" target="black">
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition text-sm lg:text-xl p-2 lg:p-3">
                <BiLogoDevTo />
              </button>
            </Link>
          </div>
          <div>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="flex items-center gap-2 bg-[#28E98C] rounded-full py-3 justify-center text-black text-lg hover:bg-transparent hover:border-[#28E98C] border-[#28E98C] border-2 hover:text-[#28E98C]  transition-colors duration-300"
            >
              {" "}
              <AiOutlineMail /> <button>HIRE ME!</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
