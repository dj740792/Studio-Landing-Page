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
  { image: "/btsImgs/bts1.jpg" },
  { image: "/btsImgs/bts2.jpg" },
  { image: "/btsImgs/bts3.jpg" },
  { image: "/btsImgs/bts4.jpg" },
  { image: "/btsImgs/bts5.jpg" },
  { image: "/btsImgs/bts6.jpg" },
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
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl "
          >
            BEHIND
            <br />
            THE SCENES
          </motion.h2>
        </div>

        <p className="max-w-md text-sm font-Clash-light md:text-md lg:text-md opacity-90 tracking-widest uppercase">
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
          dragElastic={0.1}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 px-4 md:px-8 lg:px-10 w-max"
        >
          {btsData.map((item, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-70 h-87.5  md:w-95 md:h-130 lg:w-[320px] lg:h-100 xl:w-80 xl:h-120 rounded-2xl overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
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
