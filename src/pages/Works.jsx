import React, { useRef } from "react";
import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    title: "KERN × L/V",
    subtitle: "Luxury editorial shoot",
    img: "/pic6.jpg",
    video: null,

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
    width: "35%",
    height: "40%",
    marginTop: "-10%",
    marginLeft: "5%",
  },
  {
    id: 4,
    title: "Studio M&T",
    subtitle: "Clean studio, minimalist streetwear",
    img: "/pic18.jpg",
    video: null,
    width: "38%",
    height: "55%",
    marginTop: "10%",
    marginLeft: "auto",
  },
];

const WorkCard = ({ work, index }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
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
      <div
        className="relative overflow-hidden rounded-lg "
        style={{ height: work.height }}
      >
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
            className="absolute inset-0 w-full h-full object-fill opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </div>

      <div className="mt-3">
        <p className="text-2xl font-bold tracking-tight font-mono">
          {work.title}{" "}
          <span className="text-xl text-black/60  ">-{work.subtitle}</span>
        </p>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="w-full px-10 pt-10 pb-32 ">
      <div className="flex justify-between items-start mb-16">
        <div className="p-5 ">
          <motion.h1 className=" text-[250px] font-medium relative left-55 font-roboto">
            Works
          </motion.h1>

          <motion.div className="h-full w-full "></motion.div>
        </div>
      </div>

      <div className="relative w-full flex flex-wrap">
        {works.map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial="rest"
          whileHover="hovered"
          animate="rest"
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
            variants={{
              rest: { scale: 0, opacity: 0 },
              hovered: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="text-white text-sm">→</span>
          </motion.div>

          <span className="font-bold text-xl uppercase tracking-wide relative">
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
      </div>
    </section>
  );
};

export default Works;
