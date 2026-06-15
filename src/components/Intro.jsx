import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

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

const imageVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Intro = () => {
  const lines = [
    { text: "ITS NEVER JUST A PHOTO [IMG] . ", delay: 0, imgSrc: "/loaderImgs/pic9.jpg" },
    {
      text: "EVERY FRAME TELLS A STORY.",
      delay: 0.2,
      
    },
    {
      text: "WE CRAFT [IMG] VISUAL IDENTITIES.",
      delay: 0.4,
      imgSrc: "/loaderImgs/pic8.jpg",
    },
    { text: "YOUR BRAND. OUR LENS. [IMG]", delay: 0.6, imgSrc: "/loaderImgs/pic11.jpg" },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 md:py-28 lg:py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col text-center w-full max-w-450 mx-auto"
      >
        {lines.map((line, i) => (
          <h1
            key={i}
            className="font-Satoshi-black uppercase leading-[1.3] tracking-tight flex flex-wrap justify-center overflow-visible max-w-[14ch] mx-auto"
            style={{ fontSize: "clamp(40px, 5vw, 100px)" }}
          >
            {line.text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex items-center">
                {word === "[IMG]" ? (
                  <motion.span
                    variants={imageVariants}
                    className="inline-block w-[2em]  h-[1em] mx-2 rounded-md overflow-hidden"
                  >
                    <img
                      src={
                        line.imgSrc.startsWith("/")
                          ? line.imgSrc
                          : `/${line.imgSrc}`
                      }
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </motion.span>
                ) : (
                  <span className="relative inline-block overflow-hidden py-1 ">
                    <motion.span
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                )}
              </span>
            ))}
          </h1>
        ))}
      </motion.div>
      <motion.p
        variants={wordVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex flex-col text-center mt-16 opacity-80 font-sans font-semibold"
      >
        We create visuals with purpose. We capture moments that matter
        <br />
        to shape compelling narratives and meaningful experiences. From concept
        to
        <br />
        final delivery, our work is thoughtful, authentic, and built to connect.
      </motion.p>
    </section>
  );
};

export default Intro;
