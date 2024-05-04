import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import Layout from "../Components/Common/Layout";
import AdsCard from "../Components/Landing/AdsCard";
import BlogCard from "../Components/Landing/BlogCard";
import Events from "../Components/Landing/Events";
import Features from "../Components/Landing/Features";
import Goals from "../Components/Landing/Goals";
import Grid from "../Components/Landing/GridList";
import Shortcut from "../Components/Landing/ShortcutSection";
import Testimonials from "../Components/Landing/Testimonials";
import Slider from "../Components/Slider/Slider";
import HeroSections from "./../Components/Landing/HeroSection";

function Landing() {
  return (
    <div className="container  mx-auto">
      <Heading />
      <HeroSections />

      <Shortcut />
      <Goals />
      <Grid />
      <AdsCard />
      <Features />
      <Events />
      <Testimonials />
      <BlogCard />
      <Footer />
    </div>
  );
}

export { Landing };
