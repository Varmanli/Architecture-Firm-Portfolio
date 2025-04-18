// Home.tsx: Renders the homepage with multiple sections
import About from "../components/sections/HomePage/Aboute";
import ClientsSlider from "../components/sections/HomePage/ClientsSlider";
import Contact from "../components/sections/HomePage/Contact";
import FeaturedProjects from "../components/sections/HomePage/FeaturedProjects";
import Hero from "../components/sections/HomePage/Hero";
import Services from "../components/sections/HomePage/Services";

/**
 * Home component that renders the main homepage with all sections
 * @returns {JSX.Element} The rendered homepage
 */
const Home: React.FC = () => {
  return (
    <main role="main" aria-labelledby="hero-title">
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <ClientsSlider />
      <Contact className={"py-27"} />
    </main>
  );
};

export default Home;
