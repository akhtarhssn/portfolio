import SectionContainer from "../../components/Container/SectionContainer";
import { AiOutlineUser as Icon } from "react-icons/ai";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Container from "../../components/Container/Container";

const About = () => {
  const title = (
    <>
      Unlock Limitless Possibilities with
      <span className="text-[#28E98C]"> Akhtar Hussain</span>
    </>
  );

  return (
    <section className="py-[90px] overflow-hidden relative" id="about">
      <Container>
        {/* margin to right */}
        <SectionContainer>
          <SectionHeader title={title} name={"about"} Icon={Icon} />
          <p
            className="text-neutral-400 font-inter mb-8 xl:mb-0 max-w-[610px]"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Since embarking on my journey as a web developer, I have had the
            privilege of working on diverse projects and collaborating with
            remarkable individuals. With nearly 8 years of experience, I have
            freelanced for agencies, provided consultations for startups, and
            contributed to the creation of digital products for various
            audiences. My approach is characterized by quiet confidence, a
            relentless desire to learn, and a deep commitment to solving design
            challenges. Through each project, I strive to refine my skills and
            tackle design problems one step at a time. Join me on this exciting
            journey as I continue to deliver exceptional web experiences that
            leave a lasting impact.
          </p>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default About;
