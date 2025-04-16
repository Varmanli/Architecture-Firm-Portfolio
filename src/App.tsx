import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import AOS from "aos";

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
      <Hero />
    </main>
  );
}

export default App;
