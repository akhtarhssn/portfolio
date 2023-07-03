import { FaBarsStaggered } from "react-icons/fa6";
import Container from "../../components/Container/Container";
import SectionContainer from "../../components/Container/SectionContainer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { services } from "../../../public/data";

const Services = () => {
  const title = (
    <>
      My
      <span className="text-[#28E98C]">Specializations</span>
    </>
  );

  return (
    <section className="py-[90px] overflow-hidden relative" id="services">
      <Container>
        <SectionContainer>
          <SectionHeader
            title={title}
            name={"services"}
            Icon={FaBarsStaggered}
          />
          {/* Services */}
          {services.map((service) => (
            <ServicesCard key={service.serviceName} services={service} />
          ))}
          {/* Services END */}
        </SectionContainer>
      </Container>
    </section>
  );
};

export default Services;
