import React from "react";
import { motion } from "motion/react"
import img1 from '../assets/images/pic1.jpg'

const Hero = () => {
  return (
    // Added 'relative' and 'overflow-hidden' so images stay inside the hero
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* 1. THE PHOTOS (Floating around) */}
      {/* Image 1: Top Left */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="absolute top-[10%] left-[5%] w-48 h-64 z-10"
      >
        <img src="img1" className="w-full h-full object-cover rounded-sm shadow-2xl" />
      </motion.div>

      {/* Image 2: Bottom Right */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="absolute bottom-[15%] right-[8%] w-56 h-72 z-10"
      >
        <img src="/img2.jpg" className="w-full h-full object-cover rounded-sm shadow-2xl" />
      </motion.div>

      {/* Image 3: Small Accent Top Right */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="absolute top-[15%] right-[15%] w-32 h-40 z-0 opacity-80"
      >
        <img src="/img3.jpg" className="w-full h-full object-cover rounded-sm grayscale" />
      </motion.div>


      {/* 2. THE TEXT (Centered) */}
      {/* Added 'relative z-20' so text stays on top of some images */}
      <div className="relative z-20 flex items-center justify-center h-full flex-col text-center pointer-events-none">
        <h1 className="font-roboto font-bold text-9xl leading-none ">
          STUDIO <br /> 
          <span className=" relative font-qurova left-12 text-[200px]">VARN.</span>
          
        </h1>
        <h3 className="text-lg mt-4 font-semibold max-w-2xl px-4">
          We Are a Boutique Creative Studio Specialized in Crafting Storytelling <br /> 
          <span>through Digital Content & Photos.</span>
        </h3>
        <p className="text-md font-bold [writing-mode:sideways-rl] relative left-65 bottom-88">(2026)</p>
      </div>

    </div>
  );
};

export default Hero;
