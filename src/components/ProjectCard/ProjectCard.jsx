import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="group cursor-pointer  ">
      <div className="relative mb-8">
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-3xl object-cover object-top max-h-[400px] w-full"
            src="https://i.ibb.co/h1J4TvW/kiddie-corner.png"
            alt="Kiddie Corner website project image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-3xl"></div>
          <div className="text-sm text-black flex gap-4 absolute bottom-5 left-5 group-hover:text-white transition-all duration-300">
            <span className="rounded-full px-6 py-2 cursor-pointer bg-white group-hover:bg-[#212121]">
              React
            </span>
            <span className="rounded-full px-6 py-2 cursor-pointer bg-white group-hover:bg-[#212121]">
              Node.js
            </span>
            <span className="rounded-full px-6 py-2 cursor-pointer bg-white group-hover:bg-[#212121]">
              MongoDB
            </span>
          </div>
        </Link>
      </div>
      <h2 className="text-2xl font group-hover:underline underline-offset-8 text-white group-hover:transition group-hover:duration-300">
        Kiddie Corner - Toy Marketplace website
      </h2>
    </div>
  );
};

export default ProjectCard;
