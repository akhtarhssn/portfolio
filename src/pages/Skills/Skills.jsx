import React from "react";
import Container from "../../components/Container/Container";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Skills = () => {
  return (
    <section className="py-[90px] overflow-hidden relative" id="services">
      <Container>
        <SectionContainer>
          <SectionHeader
            title={title}
            name={"services"}
            Icon={FaBarsStaggered}
          />
          {/* Skills */}

          {/* Skills END */}
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Skills;
