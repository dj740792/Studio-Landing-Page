import React, { useRef } from "react";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};

const btsData = [
  { image: "/bts1.jpg" },
  { image: "/bts2.jpg" },
  { image: "/bts3.jpg" },
  { image: "/bts4.jpg" },
  { image: "/bts5.jpg" },
  { image: "/bts6.jpg" },
];

const Bts = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="w-full py-32 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-10 mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <motion.h2
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-Satoshi-black uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none"
          >
            BEHIND
            <br />
            THE SCENES
          </motion.h2>
        </div>

        <p className="max-w-md text-sm md:text-md lg:text-md opacity-90 tracking-widest uppercase">
          A glimpse into the people, process, and moments that shape every
          project.
        </p>
      </div>

      <div
        ref={constraintsRef}
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 px-4 md:px-8 lg:px-10 w-max"
        >
          {btsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-70 h-87.5  md:w-95 md:h-130 lg:w-[320px] lg:h-100 xl:w-100 xl:h-137.5 rounded-3xl overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bts;
