import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../../components/RightSidebar/RightSidebar";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="xl:flex items-end justify-center">
      <div className="p-5 xl:p-0 z-10">
        <LeftSidebar />
      </div>
      <main className="flex-grow">
        <Hero />
      </main>
      <RightSidebar />
    </div>
  );
};

export default Home;
