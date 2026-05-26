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
    { text: "ITS NEVER JUST A PHOTO [IMG] . ", delay: 0, imgSrc: "pic17.jpg" },
    {
      text: "EVERY FRAME TELLS A STORY.",
      delay: 0.2,
      imgSrc: "pic15.jpg",
    },
    {
      text: "WE CRAFT [IMG] VISUAL IDENTITIES.",
      delay: 0.4,
      imgSrc: "pic14.jpg",
    },
    { text: "YOUR BRAND. OUR LENS. [IMG]", delay: 0.6, imgSrc: "pic21.jpg" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col text-center max-w-300"
      >
        {lines.map((line, i) => (
          <h1
            key={i}
            className="font-Satoshi-black uppercase leading-[1.2] tracking-tight flex flex-wrap justify-center overflow-visible"
            style={{ fontSize: "clamp(40px, 5vw, 100px)" }}
          >
            {line.text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex items-center">
                {word === "[IMG]" ? (
                  <motion.span
                    variants={imageVariants}
                    className="inline-block w-[2em] h-[1em] mx-2 rounded-md overflow-hidden"
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
        viewport={{once:true}}
        
        className="text-2xl flex flex-col text-center mt-16 opacity-80 font-sans font-semibold"
      >
        We Translate vision into atmosphere. We capture the energy of the frame{" "}
        <br />
        to build lasting connections between brand and audience. From concept to{" "}
        <br />
        final delivery, our work is distinctive, authentic, and built to endure.
      </motion.p>
    </section>
  );
};

export default Intro;
