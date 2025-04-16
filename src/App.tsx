import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import AOS from "aos";
import Header from "./components/sections/Header";
import Aboute from "./components/sections/Aboute";

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
    </main>
  );
}

export default App;
