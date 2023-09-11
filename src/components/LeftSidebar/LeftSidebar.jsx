import { Link } from "react-router-dom";
import { BsDribbble, BsGithub, BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const LeftSidebar = () => {
  return (
    <div className="gl:flex justify-between gap-10 ">
      {/* Sidebar Card */}
      <div className="max-w-[767px] mx-auto px-5 py-6 sm:p-7 md:p-8 border border-gray-600 rounded-[30px] text-white xl:fixed xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:left-6 flex-grow mt-20 xl:mt-0">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Akhtar</h1>
          <p className="text-right text-sm ">
            Web Designer <br /> & Developer
          </p>
        </div>
        <div className="mb-12 flex justify-center">
          <img
            src="https://i.ibb.co/dMR0BZH/Whats-App-Image-2023-06-23-at-00-36-33.jpg"
            alt="Portfolio User image"
            className="rounded-[30px] h-[550px] xl:h-[220px] xl:w-[300px] w-full object-cover xl:object-center"
          />
        </div>
        <div className="text-center">
          <div className="sm:text-xl mb-8">
            <p className="hover:text-[#28E98C]">
              <a href="mailto:akhtarhossain97@gmail.com">hello@akhtar.com</a>
            </p>
            <p>Live in Sylhet, Bangladesh</p>
          </div>
          {/*  copyright */}
          {/* <p className="text-sm text-gray-400 mb-8">
            &copy; 2023 Akhtar. All Rights Reserved
          </p> */}
          {/* Social */}
          <div className="flex gap-2 items-center text-gray-400 mb-[30px] justify-center">
            <Link>
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-3">
                <BsTwitter size={20} />
              </button>
            </Link>
            <Link>
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-3">
                <BiLogoLinkedin size={20} />
              </button>
            </Link>
            <Link>
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-3">
                <BsGithub size={20} />
              </button>
            </Link>
            <Link>
              <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-3">
                <BsDribbble size={20} />
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
