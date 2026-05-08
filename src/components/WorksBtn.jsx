import React from "react";
import { motion } from "framer-motion";

const WorksBtn = () => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      initial="rest"
      whileHover="hovered"
      animate="rest"
      drag
      whileDrag={{ scale: 0.9 }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 30,
      }}
      dragConstraints={{
        top: -10,
        left: -10,
        right: 10,
        bottom: 10,
      }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
        variants={{
          rest: { scale: 0, opacity: 0 },
          hovered: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span className="text-white text-xl">↗</span>
      </motion.div>

      <span className="font-bold text-2xl uppercase tracking-wide relative">
        See More
        <motion.span
          className="absolute left-0 -bottom-1 h-0.5 bg-black"
          variants={{
            rest: { width: "100%" },
            hovered: { width: "0%" },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </span>
    </motion.div>
  );
};

export default WorksBtn;
