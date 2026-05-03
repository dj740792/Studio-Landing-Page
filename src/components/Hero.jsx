import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen  flex  justify-center top-[25%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-qurova md:text-[14rem] mt-12 scale-y-125 tracking-tighter leading-[1.2] whitespace-nowrap">
        <span>JULIAN GLASS </span>
      </h1>
    </motion.div>
  );
};

export default Hero;
