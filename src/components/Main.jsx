import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const Main = ({ scrollYProgress }) => {
  const [phase, setPhase] = useState("gallery");

  useEffect(() => {
  
    const totalTime = 3200;

    const timer = setTimeout(() => {
      setPhase("hero");
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Gallery phase={phase} scrollYProgress={scrollYProgress} />

      {phase === "hero" && <Navbar />}
      {phase === "hero" && <Hero />}
    </main>
  );
};

export default Main;