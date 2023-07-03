import { Link } from "react-router-dom";

const ServicesCard = ({ services }) => {
  const { serviceName, ServiceIcon, details, projects } = services;
  return (
    <div
      className="border border-gray-600 rounded-[20px] px-11 py-12 group hover:border-b-[#28E98C] my-3 hover:border-t-[#212121] hover:border-l-[#212121] hover:border-r-[#212121] transition-colors duration-500"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light text-white mb-2 capitalize">
          {serviceName}
        </h2>
        <ServiceIcon size={30} className="text-[#28E98C]" />
      </div>
      <p className="text-sm text-neutral-400 mb-8">{details}</p>
      <Link
        to={"#"}
        className="text-white text-xs uppercase group-hover:underline"
      >
        {projects} Projects
      </Link>
    </div>
  );
};

export default ServicesCard;
