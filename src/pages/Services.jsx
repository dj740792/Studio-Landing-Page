import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-screen  overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap py-5 ">
      {/* Moving WHY CHOOSE US Strip */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap shrink-0"
        >
         
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <h2
              key={i}
              className="text-6xl font-black uppercase pr-16 tracking-tighter"
            >
              Why Choose Us 
            </h2>
          ))}
        </motion.div>
      </div>
      <div className="w-full h-[80%] bg-amber-200"></div>
    </section>
  );
};

export default Services;
