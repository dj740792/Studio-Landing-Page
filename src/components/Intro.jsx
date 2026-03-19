import React from "react";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <section className="w-full min-h-screen px-12 py-15 flex flex-col justify-between">
      <div className="max-w-6xl">
        <motion.h1 className="relative text-[70px] leading-[1.1] font-semibold tracking-tight left-[15%] ">
          We create content that stands out. That stays. That connects with your
          audience and moves your brand forward. Fast, powerful and intentional.
        </motion.h1>
      </div>

      <div className="flex items-center gap-100 mt-20">
        <div className="w-70 h-90 rounded-2xl bg-amber-200 overflow-hidden">
          <img src="/pic11.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-xl">
          <p className="text-2xl leading-relaxed font-medium">
            We don't stop at good looking visuals. We make them meaningful.
            Everything we create is built to perform, so you always know what
            works and what doesn't.
            <br />
            No more content without direction. No more content without results.
            Just clear, impactful storytelling that delivers.
          </p>

          <button className="relative px-8 py-3 border-2 mt-8 border-black font-semibold rounded-2xl overflow-hidden group cursor-pointer">
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-0"></span>
            <span className="relative x-10 group-hover:text-white transition-colors duration-400 ">
              Learn more →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
