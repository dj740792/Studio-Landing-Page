import react from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/HeroVid.mp4"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <Navbar />
      <Hero />
    </main>
  );
};

export default Main;