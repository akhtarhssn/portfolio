import { ImArrowDown2 } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";
import roundText from "../../../assets/round-text.png";
import Container from "../../../components/Container/Container";
import SectionContainer from "../../../components/Container/SectionContainer";

const Hero = () => {
  return (
    <section className="py-16" id="home">
      <Container>
        {/* margin to right */}
        <SectionContainer>
          <div className="my-5 mt-7">
            <h1
              className={`md:text-[58px] text-5xl font-inter md:font-normal lg:font-light md:leading-[70px] lg:leading-[90px] text-white`}
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <span className="text-[#28E98C] font-medium">Akhtar Hussain</span>
            </h1>
            <h2
              className={`md:text-[58px] text-5xl font-inter md:font-normal lg:font-light md:leading-[70px] lg:leading-[90px] text-white`}
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              Website Developer & Designer
            </h2>
          </div>
          <div className="xl:flex justify-between items-center">
            <div>
              <p
                className="text-neutral-400  font-inter mb-8 xl:mb-0 capitalize"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                I design and code beautifully simple things and i love what i
                do. <br />
                Just simple like that!
              </p>

              <div className="flex justify-between items-start mt-14 text-neutral-400 flex-wrap gap-7">
                <div
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <p className="text-[28px] text-[#28E98C] mb-3">
                    Pixel Perfect
                  </p>
                  <p>Unleash Your Vision, Perfected Pixel by Pixel</p>
                </div>
                <div
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <p className="text-[28px] text-[#28E98C] mb-3">
                    High Quality
                  </p>
                  <p>Exquisite Craftsmanship, Uncompromising Quality</p>
                </div>
                <div
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <p className="text-[28px] text-[#28E98C] mb-3">
                    User Experience
                  </p>
                  <p>Unlocking Seamless Experiences, Empowering Users</p>
                </div>
              </div>
            </div>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={1000}
              className="xl:ml-auto border border-gray-600 rounded-full  p-4 xl:flex justify-center items-center mr-4 cursor-pointer hidden"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <img
                src={roundText}
                alt=""
                className="w-52 align-middle animate-spin-slow"
              />
              <ImArrowDown2 className="absolute text-white" size={30} />
            </ScrollLink>
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Hero;
