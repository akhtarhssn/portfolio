import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { thumbnail, projectUrl, websiteName, title, technologies, animation } =
    project;
  return (
    <div
      className="group cursor-pointer my-8"
      data-aos={animation}
      data-aos-duration="1100"
    >
      <div className="relative mb-8">
        <Link to={projectUrl} target="_blank" rel="noopener noreferrer">
          <div className="overflow-hidden">
            <img
              className="rounded-3xl object-cover object-top min-h-[370px] max-h-[400px] w-full transition-transform transform-gpu"
              src={thumbnail}
              alt={`${websiteName} website project image`}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-3xl"></div>
          <div className="text-xs text-black flex gap-4 absolute bottom-5 left-5 group-hover:text-white duration-100">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full px-6 py-2 cursor-pointer bg-gray-100 group-hover:bg-[#212121] duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </Link>
      </div>
      <h2 className="text-lg font group-hover:underline underline-offset-8 text-whit">
        {title}
      </h2>
    </div>
  );
};

export default ProjectCard;
