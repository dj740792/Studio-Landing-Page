import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <img
        src="/pic12.jpg"
        className="absolute w-90 h-90 object-cover rounded-[50%] "
        alt="Stats CenterVisual"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ x: -200, y: -200 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay:.5, duration: 2, ease: "easeOut" }}
        className="h-55 w-55 rounded-[50%]  border flex justify-center items-center flex-col gap-3"
      >
        <h1 className="font-bold text-5xl ">200+</h1>
        <p className="mx-4 font-medium text-sm text-center">
          Completed shoots with brands across India and International
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ x: 600, y: -200 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay:.5, duration: 2, ease: "easeOut" }}
        className="h-55 w-55 rounded-[50%]  border flex justify-center items-center flex-col gap-3"
      >
        <h1 className="font-bold text-5xl ">100+</h1>
        <p className="mx-4 font-medium text-sm text-center">
          Locations we have completed our shoots
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ x: -600, y: 200 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay:.5, duration: 2, ease: "easeOut" }}
        className="h-55 w-55 rounded-[50%]  border flex justify-center items-center flex-col gap-3"
      >
        <h1 className="font-bold text-5xl ">3+</h1>
        <p className="mx-4 font-medium text-sm text-center">
          Years of experience with different Brands
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ x: 200, y: 200 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay:.5, duration: 2, ease: "easeOut" }}
        className="h-55 w-55 rounded-[50%]  border flex justify-center items-center flex-col gap-3"
      >
        <h1 className="font-bold text-5xl ">100+</h1>
        <p className="mx-4 font-medium text-sm text-center">
          Satisfied clients came back to us for their next project
        </p>
      </motion.div>
    </div>
  );
};

export default Stats;
