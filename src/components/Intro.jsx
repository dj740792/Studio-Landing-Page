import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const wordContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  const text =
    "We create content that stands out. That stays. That connects with your audience and moves your brand forward. Fast, powerful and intentional.";

  const words = text.split(" ");

  return (
    <motion.section
      className="w-full min-h-screen px-12 py-10 flex flex-col justify-between"
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl">
        <motion.h1
          className="relative text-[70px] leading-[1.1]  tracking-tight left-[15%] "
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={wordContainerVariants}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        className="flex items-center gap-100 mt-20"
        variants={itemVariants}
      >
        <motion.div
          className="w-70 h-90 rounded-2xl overflow-hidden"
          variants={itemVariants}
        >
          <img src="/pic11.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div className="max-w-xl" variants={itemVariants}>
          <p className="text-2xl leading-relaxed font-medium tracking-wide">
            We don't stop at good looking visuals. We make them meaningful.
            Everything we create is built to perform, so you always know what
            works and what doesn't.
            <br />
            No more content without direction. No more content without results.
            Just clear, impactful storytelling that delivers.
          </p>

          <motion.button
            className="relative px-8 py-3 border-2 mt-8 border-black font-semibold rounded-2xl overflow-hidden group cursor-pointer"
            variants={itemVariants}
          >
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-0"></span>
            <span className="relative x-10 group-hover:text-white transition-colors duration-400">
              Learn more →
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
