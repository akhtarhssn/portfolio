import { BsBriefcase as Icon } from "react-icons/bs";
import Container from "../../components/Container/Container";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Timeline from "../../components/Timeline/Timeline";
import TimelineItem from "../../components/Timeline/TimelineItem";
const Resume = () => {
  const title = (
    <>
      Education &<span className="text-[#28E98C]">Experience</span>
    </>
  );
  return (
    <section className="py-[90px] overflow-hidden relative" id="resume">
      <Container>
        {/* margin to right */}
        <SectionContainer>
          <SectionHeader title={title} name={"resume"} Icon={Icon} />
          <Timeline animation={"fade-right"}>
            <TimelineItem
              date={"2019 - Present"}
              title={"Wix Landing Page Designer"}
              subTitle={"Freelance - Fiverr"}
            />
            <TimelineItem
              title={"Wordpress Website Designer"}
              subTitle={"Freelance - Fiverr"}
            />
          </Timeline>
          <Timeline animation={"fade-left"}>
            <TimelineItem
              date={"2015 - 2023"}
              title={"PHP for Beginners | CMS Project"}
              subTitle={"Udemy - 2016"}
            />
            <TimelineItem
              title={"Zero to Hero Web Developer"}
              subTitle={"Udemy - 2018"}
            />
            <TimelineItem
              title={"Complete Web-Development Course"}
              subTitle={"Programming Hero - 2023"}
            />
          </Timeline>
          <Timeline animation={"fade-right"}>
            <TimelineItem
              date={"2017 - Present"}
              title={"Bachelor of Business Administration"}
              subTitle={"Shahjalal Govt. College"}
            />
          </Timeline>
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Resume;
