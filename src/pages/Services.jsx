import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-screen  overflow-hidden">
      <div className="flex shrink-0 whitespace-nowrap py-10 mb-20">
        {[1, 2, 3, 4].map((_, i) => (
          <motion.h2
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-6xl font-black shrink-0 uppercase pr-20"
          >
            Why Choose Us
          </motion.h2>
        ))}
      </div>
    </section>
  );
};

export default Services;
