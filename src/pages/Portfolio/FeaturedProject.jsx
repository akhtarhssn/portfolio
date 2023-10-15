import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <div
      className="group cursor-pointer mb-8"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <div className="relative mb-8">
        <Link
          to="https://soul-sync-client.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-3xl object-cover object-center max-h-[400px] w-full"
            src="https://i.ibb.co/ZSS0ztz/Soul-Sync.png"
            alt="Soul-Sync website project image"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-3xl"></div> */}
          <div className="text-xs text-black flex gap-4 absolute bottom-5 left-5 group-hover:text-white duration-100">
            <span className="rounded-full px-6 py-2 cursor-pointer bg-gray-100 group-hover:bg-[#212121] duration-300">
              React
            </span>
            <span className="rounded-full px-6 py-2 cursor-pointer bg-gray-100 group-hover:bg-[#212121] duration-300">
              Node.js
            </span>
            <span className="rounded-full px-6 py-2 cursor-pointer bg-gray-100 group-hover:bg-[#212121] duration-300">
              MongoDB
            </span>
          </div>
        </Link>
      </div>
      <h2 className="text-2xl font group-hover:underline underline-offset-8 text-white">
        Kiddie Corner - Toy Marketplace website
      </h2>
    </div>
  );
};

export default FeaturedProject;
