import React from "react";
import Container from "../../components/Container/Container";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { LiaShapesSolid } from "react-icons/lia";

const Skills = () => {
  const title = (
    <>
      My <span className="text-[#28E98C]">Advantages</span>
    </>
  );

  return (
    <section className="py-[90px] overflow-hidden relative" id="skills">
      <Container>
        <SectionContainer>
          <SectionHeader title={title} name={"skills"} Icon={LiaShapesSolid} />
          {/* Skills */}

          {/* Skills END */}
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Skills;
