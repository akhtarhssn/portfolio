import React from "react";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { BiGridVertical } from "react-icons/bi";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
          <ProjectCard />
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Portfolio;
