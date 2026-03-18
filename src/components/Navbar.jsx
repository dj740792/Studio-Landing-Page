import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="absolute top-0 left-0 w-full p-10 flex justify-between items-center z-50 pointer-events-none m-5 motion-preset-slide-down"
    >
      <div className="pointer-events-auto font-black  text-3xl ms-5">KERN.</div>
      <ul className="flex  text-md uppercase gap-10 font-semibold  pointer-events-auto me-5">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Works</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="font-bold text-xl  uppercase cursor-pointer mr-10 ">
        Let's connect
      </div>
    </motion.div>
  );
};

export default Navbar;
