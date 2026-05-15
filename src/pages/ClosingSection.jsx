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
                      className="w-full h-full object-cover"
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
      <div className="relative left-[20%] flex flex-col justify-around self-center">
        <motion.p
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-xl flex  text-start opacity-80 font-sans font-semibold"
        >
          LETS US CAPTURE YOUR BRAND WITH OUR LENS <br />
          YOUR BRAND OUR LENS
        </motion.p>
       
      </div>
    </section>
  );
};
export default ClosingSection;
