import roundText from "../../../assets/round-text.png";
import SectionContainer from "../../../components/Container/SectionContainer";
import Container from "../../../components/Container/Container";
import { ImArrowDown2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import HeroHeader from "../../../components/HeroHeader/HeroHeader";

const Hero = () => {
  const title = (
    <>
      Embrace Creative Excellence with{" "}
      <span className="text-[#28E98C]">Akhtar</span>
    </>
  );

  return (
    <section className="py-16" id="home">
      <Container>
        {/* margin to right */}
        <SectionContainer>
          <HeroHeader title={title} name={"welcome"} Icon={AiOutlineHome} />
          <div className="xl:flex justify-between">
            <p
              className="text-neutral-400 font-inter mb-8 xl:mb-0"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              I design and code beautifully simple things and i love what i do.{" "}
              <br />
              Just simple like that!
            </p>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={1000}
              className="xl:ml-auto border border-gray-600 rounded-full w-44 h-44 p-4 flex justify-center items-center mr-4 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <img
                src={roundText}
                alt=""
                className="w-full align-middle animate-spin-slow"
              />
              <ImArrowDown2 className="absolute text-white" size={30} />
            </ScrollLink>
          </div>
          <div className="flex justify-between items-start mt-14 text-neutral-400 flex-wrap gap-7">
            <div className="w-56" data-aos="fade-up" data-aos-duration="1100">
              <h1 className="text-[28px] text-[#28E98C] mb-3">Pixel Perfect</h1>
              <p>Unleash Your Vision, Perfected Pixel by Pixel</p>
            </div>
            <div className="w-56" data-aos="fade-up" data-aos-duration="1100">
              <h1 className="text-[28px] text-[#28E98C] mb-3">High Quality</h1>
              <p>Exquisite Craftsmanship, Uncompromising Quality</p>
            </div>
            <div className="w-56" data-aos="fade-up" data-aos-duration="1100">
              <h1 className="text-[28px] text-[#28E98C] mb-3">
                User Experience
              </h1>
              <p>Unlocking Seamless Experiences, Empowering Users</p>
            </div>
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Hero;
