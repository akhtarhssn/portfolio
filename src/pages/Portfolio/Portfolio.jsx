import React from "react";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { BiGridVertical } from "react-icons/bi";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../../public/data";
import FeaturedProject from "./FeaturedProject";

const Portfolio = () => {
  const title = (
    <>
      My Featured <span className="text-[#28E98C]">Projects</span>
    </>
  );

  return (
    <section className="py-[90px] overflow-hidden relative" id="portfolio">
      <Container>
        {/* margin to right */}
        <SectionContainer>
          <SectionHeader
            title={title}
            name={"portfolio"}
            Icon={BiGridVertical}
          />
          <FeaturedProject />
          <div
            className="grid md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {projects.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Portfolio;
