import React, { useRef } from "react";
import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    title: "KERN × L/V",
    subtitle: "Luxury editorial shoot",
    img: "/pic6.jpg",
    video: null,
    // position and size lives here in the data
    width: "42%",
    height: "68%",
    marginTop: "0px",
    marginLeft: "15%",
  },
  {
    id: 2,
    title: "Indian Love",
    subtitle: "Traditional craft, contemporary lens",
    img: "/pic7.jpg",
    video: null,
    width: "30%",
    height: "70%",
    marginTop: "35%",
    marginLeft: "auto",
  },
  {
    id: 3,
    title: "The Blues",
    subtitle: "Moody tones & natural light",
    img: "/pic5.jpg",
    video: null,
    width: "25%",
    height: "50%",
    marginTop: "50%",
    marginLeft: "0px",
  },
  {
    id: 4,
    title: "Studio M&T",
    subtitle: "Clean studio, minimalist streetwear",
    img: "/pic18.jpg",
    video: null,
    width: "38%",
    height: "420px",
    marginTop: "220px",
    marginLeft: "auto",
  },
];

const WorkCard = ({ work, index }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        width: work.width,
        marginTop: work.marginTop,
        marginLeft: work.marginLeft,
      }}
      className="cursor-pointer group"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* image / video container */}
      <div className="relative overflow-hidden rounded-lg" style={{ height: work.height }}>
        <motion.img
          src={work.img}
          alt={work.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {work.video && (
          <video
            ref={videoRef}
            src={work.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </div>

      {/* text below image */}
      <div className="mt-3">
        <p className="text-2xl font-bold tracking-tight font-mono">{work.title} <span className="text-xl text-black/60  ">-{work.subtitle}</span></p>
        
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="w-full px-10 pt-10 pb-32 ">
      {/* Header */}
      <div className="flex justify-between items-start mb-16">
        <div className="p-5 ">
          <motion.h1 className=" text-[250px] font-semibold relative left-55 font-roboto">
            Works
          </motion.h1>

          <motion.div className="h-full w-full "></motion.div>
        </div>
      </div>

      {/* All cards rendered via map() — positions come from the data */}
      <div className="relative w-full flex flex-wrap">
        {works.map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </div>

      {/* Browse all */}
      <div className="flex justify-center mt-20">
        <button className="text-xs tracking-[0.2em] uppercase border-b border-black pb-1 cursor-pointer hover:opacity-50 transition-opacity duration-300">
          Browse all work
        </button>
      </div>
    </section>
  );
};

export default Works;
