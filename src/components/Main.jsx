import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import ScrollSection from "./ScrollSec";

const Main = () => {
  const [phase, setPhase] = useState("gallery");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hero"), 4000);
    return () => clearTimeout(t1);
  }, []);

  return (
    <main className="w-full">

      {/* FIRST SCREEN (Loader + Hero) */}
      <section className="relative h-screen overflow-hidden">
        <Gallery phase={phase} />

        {phase === "hero" && (
          <>
            <Navbar />
            <Hero />
          </>
        )}
      </section>

      {/* SCROLL SECTION (ONLY AFTER HERO) */}
      {phase === "hero" && <ScrollSection />}

    </main>
  );
};

export default Main;