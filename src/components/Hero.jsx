import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: "104%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Hero = () => {
  return (
    <div className="relative h-screen  flex flex-col  items-center  text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="z-40 top-[25%] relative"
      >
        <motion.h1
          variants={itemVariants}
          className="font-Satoshi-black md:text-[14rem] mt-12 scale-y-125 tracking-tight leading-[1.2] whitespace-nowrap"
        >
          <span>STUDIO GLASS </span>
        </motion.h1>
        <div className="flex justify-around items-center h-full w-full">
          <div className="flex flex-col items-center  gap-6 font-Satoshi-black">
            <p className="text-xl font-sans font-semibold">
              From moving image to still frames, we create work shaped by
              <br />
              atmosphere, emotion, and thoughtful storytelling that leaves
              <br />a lasting connection with the people experiencing it.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
