import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const Main = ({ scrollYProgress }) => {
  const [phase, setPhase] = useState("gallery");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hero"), 4000);
    return () => clearTimeout(t1);
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