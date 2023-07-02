// { Icon, name, title, fontSize }

const HeroHeader = ({ name, Icon, title }) => {
  return (
    <div>
      {/* Section Name */}
      <div
        className="flex items-center gap-2 border border-gray-600 rounded-full px-5 py-2 w-fit text-white"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        <Icon />
        <p className="uppercase font-inter text-xs">{name}</p>
      </div>
      {/* Title */}
      <h2
        className={`md:text-[78px]  sm:text-[58px] text-5xl font-inter font-light leading-[90px] text-white my-12`}
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        {title}
      </h2>
    </div>
  );
};

export default HeroHeader;
