import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: "120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Testimonial = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen relative w-full flex flex-col justify-center items-center py-20 px-12"
    >
      <div className="leading-none text-center text-[5vw] max-w-300">
        <div className="overflow-hidden">
          <motion.h1 variants={itemVariants}>Stories</motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1 variants={itemVariants}>worth</motion.h1>
        </div>

        <div>
          <motion.h1 variants={itemVariants}>sharing</motion.h1>
        </div>
      </div>

      <div className="overflow-hidden mt-12">
        <motion.p
          variants={itemVariants}
          className="text-xl font-sans font-semibold text-center leading-relaxed"
        >
          The most meaningful part of this journey <br /> is the people we've
          had the chance to create with. <br /> We're grateful to share a few
          experiences from the <br />clients and collaborators behind the work.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Testimonial;
