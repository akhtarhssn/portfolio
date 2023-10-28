import { useState } from "react";
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";
import MobileMenu from "../../../components/MobileMenu/MobileMenu";
import MobileMenuIcon from "../../../components/MobileMenu/MobileMenuIcon";
import RightSidebar from "../../../components/RightSidebar/RightSidebar";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Portfolio from "../../Portfolio/Portfolio";
import Resume from "../../Resume/Resume";
import Services from "../../Services/Services";
import Skills from "../../Skills/Skills";
import Hero from "../Hero/Hero";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="xl:flex items-end justify-center font-inter">
        {/* Overlay */}
        {openMenu && (
          <div
            className="fixed inset-0 bg-[#565656] bg-opacity-20 sm:bg-opacity-40 z-20"
            onClick={toggleMenu}
          ></div>
        )}
        {/* Overlay */}
        <div className="p-5 xl:p-0 z-10">
          <LeftSidebar />
        </div>
        <div className="flex-grow">
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
        <RightSidebar />
        {/* Mobile Menu */}
        <div className="absolute xl:right-6 xl:top-20 top-5 ml-6 xl:ml-0">
          <MobileMenuIcon toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Home;
