// { Icon, name, title, fontSize }

const SectionHeader = ({ name, Icon, title }) => {
  return (
    <div>
      {/* Section Name */}
      <div
        className="flex items-center gap-2 border border-gray-600 rounded-full px-5 py-2 w-fit text-white"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        <Icon className="text-[#28E98C]" />
        <p className="uppercase font-inter text-xs">{name}</p>
      </div>
      {/* Title */}
      <h2
        className={`md:text-[48px] text-[38px] font-inter text-white my-8`}
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
