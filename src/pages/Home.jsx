import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";
import ApproachSection from "../components/ApproachSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import FeaturedCreations from "../components/FeaturedCreations";


const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />   
      <ScrollPromo className="zoom-in" />
      <FeaturedCreations className="fade-left" />
      <ApproachSection className="fade-up" />
      <TestimonialsSection className="fade-right" />
      <BlogSection className="fade-up" />

    </>
  );
};

export default Home;
