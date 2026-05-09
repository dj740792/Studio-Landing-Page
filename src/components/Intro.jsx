import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const lines = [
    { text: "ITS NEVER JUST A PHOTO [IMG] . ", delay: 0, imgSrc: "/pic12.jpg" },
    {
      text: "EVERY FRAME TELLS A STORY.",
      delay: 0.2,
      imgSrc: "pic12.jpg",
    },
    {
      text: "WE CRAFT [IMG] VISUAL IDENTITIES.",
      delay: 0.4,
      imgSrc: "pic14.jpg",
    },
    { text: "YOUR BRAND. OUR LENS. [IMG]", delay: 0.6,
      imgSrc: "pic21.jpg" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="flex flex-col text-center max-w-300">
        {lines.map((line, i) => (
          <h1
            key={i}
            className="font-qurova uppercase leading-[1.2] tracking-tight flex flex-wrap justify-center  overflow-visible"
            style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
          >
            {line.text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex items-center">
                {word === "[IMG]" ? (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: line.delay }}
                    className="inline-block w-[2em] h-[1em] mx-2 rounded-md overflow-hidden "
                  >
                    <img
                      src={line.imgSrc}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </motion.span>
                ) : (
                  <span className="relative inline-block overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        delay: line.delay + wordIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block "
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                )}
              </span>
            ))}
          </h1>
        ))}
      </div>
      <motion.p 
      initial={{y:"120%"}}
      whileInView={{y:"0%"}}
      
      className="text-xl flex flex-col text-center mt-12 opacity-80">
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
