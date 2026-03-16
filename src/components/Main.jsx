import React, { useState, useEffect } from "react";
import ImageSequence from "./ImageSequence.jsx";
import Hero from "./Hero.jsx";

const Main = () => {
  const [phase, setPhase] = useState("images");

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase("hero");
    }, 4200);

    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {phase === "images" && <ImageSequence />}
      {phase === "hero" && <Hero />}
    </main>
  );
};

export default Main;