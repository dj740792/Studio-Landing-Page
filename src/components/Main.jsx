import React from "react";
import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen   overflow-hidden flex ">
      <motion.div
       
        whileHover={{ scale: 1.1 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-[10%] top-[15%] w-64 h-80 z-20 "
      >
        
        <img
          src="/pic4.jpg"
          className="w-full h-full object-cover rounded-xl transition-all duration-700"
          alt="Portait"
        />
      </motion.div>

      <div className="relative bottom-[15%] left-[20%] flex-1 flex flex-col justify-end p-12 z-20">
        <p className="text-white text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
          Capture | Style
        </p>
        <h1 className="font-roboto font-bold text-9xl leading-none ">
          STUDIO <br />
          <span className=" relative font-qurova text-[200px]">VARN.</span>
        </h1>
        <p className="text-white/80 text-md mt-8 max-w-70 leading-relaxed">
          Specialized in Crafting Storytelling through Digital Content & Photos.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" z-50 cursor-pointer absolute bottom-[15%] right-[30%] -translate-x-1/2 bg-[#C82323] text-white text-[12px] font-bold uppercase tracking-widest px-10 py-5 rounded-[100%] whitespace-nowrap shadow-2xl"
      >
        Let's Capture
      </motion.button>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute right-[10%] bottom-[8%] w-[30vw] h-[70vh] z-0"
      >
        <img
          src="/pic2.jpg"
          className="w-full h-full object-cover rounded-xl"
          alt="Featured Work"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
