import Aboute from "../components/sections/HomePage/Aboute";
import ClientsSlider from "../components/sections/HomePage/ClientsSlider";
import Contact from "../components/sections/HomePage/Contact";
import FeaturedProjects from "../components/sections/HomePage/FeaturedProjects";
import Hero from "../components/sections/HomePage/Hero";
import Services from "../components/sections/HomePage/Services";

export default function Home() {
  return (
    <main>
      <main>
        <Hero />
        <Aboute />
        <FeaturedProjects />
        <Services />
        <ClientsSlider />
        <Contact />
      </main>
    </main>
  );
}
