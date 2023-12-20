import React, { useEffect, useState } from "react";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { BiGridVertical } from "react-icons/bi";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import FeaturedProject from "./FeaturedProject";
import { data } from "../../../public/data";

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
          <FeaturedProject
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
          />
          <div
            className="grid grid-cols-1 xl:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            {data.projects.map((project) => (
              <ProjectCard
                key={project?._id}
                project={project}
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
              />
            ))}
          </div>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Portfolio;
