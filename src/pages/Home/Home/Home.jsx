import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar/RightSidebar";
import About from "../../About/About";
import Resume from "../../Resume/Resume";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="xl:flex items-end justify-center font-inter">
      <div className="p-5 xl:p-0 z-10">
        <LeftSidebar />
      </div>
      <main className="flex-grow">
        <Hero />
        <About />
        <Resume />
      </main>
      <RightSidebar />
    </div>
  );
};

export default Home;
