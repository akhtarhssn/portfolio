import { Link } from "react-router-dom";
import { BsDribbble, BsGithub, BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const LeftSidebar = () => {
  return (
    <div className="p-12 border border-gray-600 rounded-[30px] text-white fixed w-[400px]">
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-4xl font-bold">Wixden</h1>
        <p className="text-right text-sm ">
          Web Designer <br /> & Developer
        </p>
      </div>
      <div className="mb-12">
        <img
          src="https://drake-react.vercel.app/assets/images/me.jpg"
          alt="Portfolio User image"
          className="rounded-[30px]"
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
          <Link className="flex items-center gap-2 bg-[#28E98C] rounded-full py-3 justify-center text-black text-lg">
            {" "}
            <AiOutlineMail /> <button>HIRE ME!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
