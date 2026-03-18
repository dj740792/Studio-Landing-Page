import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="absolute inset-0 flex mt-20 items-center justify-start "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="z-10 pointer-events-none flex flex-col mt-20 font-semibold font-mono text-[200px] ml-20 leading-[0.8] tracking-tighter motion-preset-slide-right motion-duration-2000">
        <span>Studio</span>
        <span className="font-semibold uppercase text-[400px] mt-7.5  ">
          kern.
        </span>
      </h1>
      <p className="relative font-medium -top-[15%] text-xl right-[10%] text-start ">
        Specialized in crafting storytelling <br /> through digital content and
        photos.
      </p>
    </motion.div>
  );
};

export default Hero;
