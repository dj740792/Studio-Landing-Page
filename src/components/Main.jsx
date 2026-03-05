import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const images = [
    {
      id: 1,
      src: "/pic1.jpg",
      pos: "top-[10%] left-[5%]",
      size: "w-48 h-64",
      z: "z-30",
    },
    {
      id: 2,
      src: "/pic2.jpg",
      pos: "bottom-[12%] right-[18%]",
      size: "w-56 h-72",
      z: "z-30",
    },
    {
      id: 3,
      src: "/pic3.jpg",
      pos: "top-[20%] right-[4%]",
      size: "w-38 h-60",
      z: "z-30",
    },
    {
      id: 4,
      src: "/pic4.jpg",
      pos: "top-[10%] right-[25%]",
      size: "w-32 h-40",
      z: "z-30",
    },
    {
      id: 5,
      src: "/pic5.jpg",
      pos: "bottom-[10%] left-[10%]",
      size: "w-64 h-80",
      z: "z-30",
    },
    {
      id: 6,
      src: "/pic6.jpg",
      pos: "top-[5%] left-[50%]",
      size: "w-36 h-40",
      z: "z-30",
    },
    {
      id: 7,
      src: "/pic7.jpg",
      pos: "bottom-[5%] left-[45%]",
      size: "w-40 h-44",
      z: "z-30",
    },
    {
      id: 8,
      src: "/pic8.jpg",
      pos: "top-[10%] left-[25%]",
      size: "w-40 h-44",
      z: "z-30",
    },
  ];
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      {images.map((img) => (
        <motion.div
          key={img.id}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          animate={{
            y: [0, -15, 0],
            repeat:Infinity
          }}
          transition={{
            duration: 3 + Math.random() * 2,
           
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          className={`absolute ${img.pos} ${img.size} ${img.z} cursor-grab`}
        >
          <img
            src={img.src}
            alt="Studio Work"
            className="w-full h-full object-cover rounded-sm shadow-2xl pointer-events-none"
          />
        </motion.div>
      ))}

      {/* TEXT SECTION */}
      <div className="relative z-20 flex items-center justify-center h-full flex-col text-center pointer-events-none scale-90">
        <h1 className="font-roboto font-bold text-9xl leading-none ">
          STUDIO <br />
          <span className=" relative font-qurova left-12 text-[200px]">
            VARN.
          </span>
        </h1>
        <h3 className="text-lg mt-4 font-semibold max-w-2xl px-4">
          We Are a Boutique Creative Studio Specialized in Crafting Storytelling{" "}
          <br />
          <span>through Digital Content & Photos.</span>
        </h3>
        <p className="text-md font-bold [writing-mode:sideways-rl] relative left-65 bottom-88">
          (2026)
        </p>
      </div>
    </div>
  );
};

export default Hero;
