import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    y: "105%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.75]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 250]
  );

  const heading = "STUDIO GLASS";

  const paragraph = [
    "From moving image to still frames, we create work shaped by",
    "atmosphere, emotion, and thoughtful storytelling that leaves",
    "a lasting connection with the people experiencing it.",
  ];

  return (
    <motion.section
      ref={heroRef}
      style={{
        scale,
        opacity,
        y,
      }}
      className="relative h-screen flex flex-col items-center justify-center text-white px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-40 flex flex-col items-center"
      >
        {/* HEADING */}
        <div className="overflow-hidden">
          <h1 className="font-Satoshi-black text-[16vw] md:text-[12rem] scale-y-125 tracking-tight leading-none text-center whitespace-nowrap">
            {heading.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden"
              >
                <motion.span
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* PARAGRAPH */}
        <motion.div
          variants={containerVariants}
          className="mt-8 md:mt-10 flex flex-col items-center gap-1"
        >
          {paragraph.map((line, i) => (
            <div
              key={i}
              className="overflow-hidden"
            >
              <motion.p
                variants={wordVariants}
                className="text-center text-sm sm:text-base md:text-xl font-sans font-semibold leading-relaxed"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;