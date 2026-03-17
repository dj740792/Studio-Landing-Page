import React, { useState, useEffect } from "react";
import Hero from "./Hero";

import Gallery from "./Gallery";

const Main = () => {
  const [phase, setPhase] = useState("gallery");

  useEffect(() => {
    const t2 = setTimeout(() => setPhase("gallery"), 2400);
    const t3 = setTimeout(() => setPhase("hero"), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {phase === "hero" && <Hero />}

      <Gallery phase={phase} />
    </main>
  );
};

export default Main;
