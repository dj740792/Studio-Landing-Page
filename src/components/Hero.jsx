import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen  flex  justify-center top-[25%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="uppercase font-qurova md:text-[18rem] mt-12 scale-y-125 leading-[0.8] whitespace-nowrap">
        <span></span>
      </h1>
    </motion.div>
  );
};

export default Hero;
