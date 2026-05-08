import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Services = () => {
  const services = [
    { id: 1, title: "IN STUDIO OR NATURAL LIGHT LOCATION", img: "/pic16.jpg" },
    { id: 2, title: "DESIGNED FOR EMOTIONAL BRAND CONNECT", img: "/pic14.jpg" },
    {
      id: 3,
      title: "CINEMATIC LIGHTING & PROFESSIONAL SETUPS",
      img: "/pic15.jpg",
    },
    {
      id: 4,
      title: "PERSONALIZED CREATIVE CONCEPT DEVELOPMENT",
      img: "/pic13.jpg",
    },
    {
      id: 5,
      title: "PERFECT FOR BRANDS CREATORS & BUSINESSES",
      img: "/pic17.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-screen overflow-hidden flex items-center ">
      <div className="w-full h-full bg-black">
        <div className="w-2/6 h-full text-[6rem] flex flex-col text-left leading-[1.3] tracking-tight font-montserra justify-center">
          <h1 className="mx-6">WHAT TO EXPECT AT YOUR VISIT</h1>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Services;
