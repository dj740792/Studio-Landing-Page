import React, { useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    id: 1,
    value: "200+",
    label: "Completed Shoots",
    description: "Brands across India and international markets",
    img: "/pic1.jpg",
  },
  {
    id: 2,
    value: "100+",
    label: "Locations",
    description: "Unique locations across diverse environments",
    img: "/pic12.jpg",
  },
  {
    id: 3,
    value: "3+",
    label: "Years Active",
    description: "Working with brands of every scale and vision",
    img: "/pic6.jpg",
  },
  {
    id: 4,
    value: "100+",
    label: "Returning Clients",
    description: "Clients who came back for their next project",
    img: "/pic16.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Stats = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <motion.section
      className="h-screen w-full flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.id}
          className="relative overflow-hidden cursor-pointer"
          variants={cardVariants}
          animate={{
            flex: expandedIndex === index ? 2.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          onMouseEnter={() => setExpandedIndex(index)}
          onMouseLeave={() => setExpandedIndex(null)}
          style={{
            borderRight:
              index !== statsData.length - 1 ? "1px solid white" : "none",
          }}
        >
          {/* Image */}
          <motion.img
            src={stat.img}
            alt={stat.label}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: expandedIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            {/* Number */}
            <motion.p
              className="font-mono leading-none m-0 text-white"
              style={{ fontSize: "clamp(48px, 5vw, 88px)", fontWeight: 500 }}
            >
              {stat.value}
            </motion.p>

            {/* Label */}
            <p
              className="uppercase tracking-widest text-white/70 mt-2"
              style={{ fontSize: "11px", letterSpacing: "0.2em" }}
            >
              {stat.label}
            </p>

            {/* Description — only visible on expand */}
            <motion.p
              className="text-white/60 mt-3 leading-relaxed"
              style={{ fontSize: "13px", maxWidth: "200px" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: expandedIndex === index ? 1 : 0,
                y: expandedIndex === index ? 0 : 10,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {stat.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Stats;