import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import AOS from "aos";
import Header from "./components/sections/Header";

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
    </main>
  );
}

export default App;
