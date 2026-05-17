import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
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
  const { scrollYProgress } = useScroll();

  const videoWidth = useTransform(scrollYProgress, [0, 0.1], ["100vw", "90vw"]);

  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["100vh", "90vh"],
  );

  const radius = useTransform(scrollYProgress, [0, 0.1], ["0px", "40px"]);

  const heading = "STUDIO GLASS";

  const paragraph = [
    "From moving image to still frames, we create work shaped by",
    "atmosphere, emotion, and thoughtful storytelling that leaves",
    "a lasting connection with the people experiencing it.",
  ];

  return (
    <motion.div
      className="relative h-screen flex flex-col items-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.video
        src="/videos/HeroVid.mp4"
        className="absolute object-cover"
        style={{
          width: videoWidth,
          height: videoHeight,
          borderRadius: radius,
          left: "50%",
          x: "-50%",
          zIndex: 0,
        }}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-40 h-screen w-full flex flex-col items-stretch justify-around gap-12 px-6"
      >
        <h1 className="relative font-qurova text-[16vw] md:text-[13rem] top-[15%] scale-y-110 tracking-tight leading-none whitespace-nowrap overflow-hidden text-center">
          {heading.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span variants={wordVariants} className="inline-block">
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        {/* LOWER CONTENT */}
        <div className="flex items-center justify-around gap-10 md:gap-24 w-full mt-9">
          {/* LEFT */}
          <motion.div
            variants={wordVariants}
            className="text-[4rem] md:text-[7rem] font-black leading-none"
          >
            20
          </motion.div>

          {/* CENTER TEXT */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col items-center gap-1 font-qurova"
          >
            {paragraph.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  variants={wordVariants}
                  className="text-sm md:text-lg text-center uppercase leading-relaxed"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={wordVariants}
            className="text-[4rem] md:text-[7rem] font-black leading-none "
          >
            26
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
