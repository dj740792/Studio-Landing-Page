import React, { useRef } from "react";
import { motion } from "framer-motion";
import WorksBtn from "../components/WorksBtn";

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
const Heading = [
  { text: 'works', delay: 0.25 },
 
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


const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.045,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
const Works = () => {
  return (
    <section className="w-full px-10 pt-10 pb-32 ">
      <div className="flex justify-between items-start mb-16">
        <div className="flex flex-col items-center text-center gap-2">
        {Heading.map((char, i) => (
          <h1
            key={i}
            className="font-qurova uppercase text-9xl leading-[1.05]"
           
          >
            <AnimatedText text={char.text} delay={char.delay} />
          </h1>
        ))}
      </div>
      </div>

      <div className="relative w-full flex flex-wrap">
        {works.map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </div>
      <motion.div
        drag
        whileDrag={{ scale: 0.9 }}
        dragSnapToOrigin
        dragElastic={0.2}
        dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
        className="flex justify-center"
      >
        <WorksBtn />
      </motion.div>
    </section>
  );
};

export default Works;
