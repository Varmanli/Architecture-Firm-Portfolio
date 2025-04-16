import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import AOS from "aos";
import Header from "./components/sections/Header";
import Aboute from "./components/sections/Aboute";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Services from "./components/sections/Services";
import ClientsSlider from "./components/sections/ClientsSlider";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Aboute />
      <FeaturedProjects />
      <Services />
      <ClientsSlider />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
