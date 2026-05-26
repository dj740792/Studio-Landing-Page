import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    y: "105%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Hero = () => {
  const heading = ["STUDIO", "GLASS"];

  return (
    <section className="relative min-h-screen overflow-hidden text-black px-6 md:px-10 pt-28 pb-10">
      {/* NAV SPACE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-full w-px bg-black/5" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-black/5" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-black/5" />
      </div>

      {/* TOP RIGHT SMALL IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="absolute right-8 md:right-16 top-28 w-32 md:w-44 h-40 md:h-56 rounded-md overflow-hidden"
      >
        <img
          src="/pic11.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* SMALL COPY */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className="absolute right-8 md:right-16 top-[22rem] md:top-[25rem] max-w-[240px]"
      >
        <p className="uppercase text-xs md:text-sm leading-relaxed tracking-wide">
          Visual storytelling studio crafting cinematic imagery,
          creative direction, and emotionally driven brand experiences.
        </p>
      </motion.div>

      {/* MAIN HERO */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col justify-center min-h-[85vh]"
      >
        {/* HEADING */}
        <div className="leading-[0.82] tracking-[-0.06em] uppercase font-black">
          {heading.map((line, i) => (
            <div
              key={i}
              className="overflow-hidden flex items-center justify-center"
            >
              <motion.h1
                variants={wordVariants}
                className="text-[22vw] md:text-[14rem] flex items-center gap-4"
              >
                {line === "GLASS" && (
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -8,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.7,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="hidden md:block w-40 h-24 rounded-xl overflow-hidden relative top-2"
                  >
                    <img
                      src="/pic16.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          {/* LEFT */}
          <motion.div
            variants={wordVariants}
            className="max-w-sm"
          >
            <p className="uppercase text-sm md:text-base leading-relaxed">
              From moving image to still frames, we create work
              shaped by atmosphere, emotion, and thoughtful
              storytelling.
            </p>
          </motion.div>

          {/* CENTER */}
          <motion.div
            variants={wordVariants}
            className="text-[5rem] md:text-[9rem] leading-none font-black tracking-tight"
          >
            2026
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={wordVariants}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <span className="uppercase text-sm">
              Based in India
            </span>

            <span className="uppercase text-sm">
              Available Worldwide
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* FLOATING ACCENT IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute left-10 bottom-20 md:bottom-28 w-28 md:w-40 h-36 md:h-52 rounded-xl overflow-hidden rotate-[-6deg]"
      >
        <img
          src="/pic8.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;