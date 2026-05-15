import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Main;