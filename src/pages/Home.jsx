import Hero from "../components/Hero";
import DeveloperAndEmployeers from "../components/DeveloperAndEmployeers";
import JobListings from "../components/JobListings";
import { LoadMore } from "../components/LoadMore";

const Home = () => {
  return (
    <>
      <Hero />
      <DeveloperAndEmployeers />
      <JobListings isHome={true} />
      <LoadMore />
    </>
  );
};

export default Home;
