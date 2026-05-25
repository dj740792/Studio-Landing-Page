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
const ClosingSection = () => {
  const lines = [
    { text: "LETS WORK", delay: 0 },
    { text: "[IMG] TOGETHER", delay: 0.6, imgSrc: "pic11.jpg" },
  ];
  return (
    <section className="w-full min-h-150 flex  items-end justify-start py-20 px-6 ">
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
            className="leading-[1.2] tracking-tight flex  justify-start overflow-visible"
            style={{ fontSize: "clamp(40px, 7vw, 110px)" }}
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
                      className="w-full h-full object-cover "
                      alt=""
                    />
                  </motion.span>
                ) : (
                  <span className="relative inline-block overflow-hidden py-1">
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
      <div className="flex flex-col items-start justify-center gap-10 max-w-xl ml-auto pb-20 px-20">
        <motion.p
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl leading-relaxed font-sans font-semibold max-w-lg"
        >
        LET US CAPTURE YOUR BRAND WITH OUR LENS
        </motion.p>
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial="rest"
          whileHover="hovered"
          animate="rest"
          drag
          whileDrag={{ scale: 0.9 }}
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 30,
          }}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        >
          <span className="font-bold text-xl uppercase tracking-wide relative">
            LETS CAPTURE
            <motion.span
              className="absolute left-0 -bottom-1 h-0.5 bg-black"
              variants={{
                rest: { width: "100%" },
                hovered: { width: "0%" },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          </span>
          <motion.div
            className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            variants={{
              rest: { scale: 0, opacity: 0 },
              hovered: { scale: 1, opacity: 1 },
            }}
            transition={{
              duration: 0.50,
              ease: "easeOut",
            }}
          >
            <span className="text-white text-xl">↗</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
