import { Link } from "react-router-dom";
import { BsDribbble, BsGithub, BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiMiniBars2 } from "react-icons/hi2";

const LeftSidebar = () => {
  return (
    <div className="flex justify-between gap-10">
      {/* Sidebar Card */}
      <div className="max-w-[767px] mx-auto p-12 border border-gray-600 rounded-[30px] text-white xl:fixed xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:left-6 flex-grow">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-4xl font-bold">Wixden</h1>
          <p className="text-right text-sm ">
            Web Designer <br /> & Developer
          </p>
        </div>
        <div className="mb-12 flex justify-center">
          <img
            src="https://drake-react.vercel.app/assets/images/me.jpg"
            alt="Portfolio User image"
            className="rounded-[30px] w-[300px]"
          />
        </div>
        <div className="text-center">
          <div className="text-2xl mb-8">
            <p className="hover:text-[#28E98C]">
              <a href="mailto:akhtarhossain97@gmail.com">hello@akhtar.com</a>
            </p>
            <p>Live in Sylhet, Bangladesh</p>
          </div>
          {/*  copyright */}
          <p className="text-sm text-gray-400 mb-8">
            &copy; 2023 Akhtar. All Rights Reserved
          </p>
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
            <Link className="flex items-center gap-2 bg-[#28E98C] rounded-full py-3 justify-center text-black text-lg hover:bg-transparent hover:border-[#28E98C] border-[#28E98C] border-2 hover:text-[#28E98C]  transition-colors duration-300">
              {" "}
              <AiOutlineMail /> <button>HIRE ME!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="xl:absolute right-6 top-20">
        <button className="border-2 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-5">
          <HiMiniBars2 />
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
