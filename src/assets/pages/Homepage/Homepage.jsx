import FeaturedCategories from "../../../components/FeaturedCategories/FeaturedCategories";
import FeaturedJobs from "../../../components/FeaturedJobs/FeaturedJobs";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Navbar from "../../../components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedJobs />
      </div>
    </div>
  );
};

export default Homepage;
