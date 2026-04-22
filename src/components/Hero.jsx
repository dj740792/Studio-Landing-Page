import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="absolute inset-0 flex  justify-center top-[25%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="uppercase font-montserraBold md:text-[16rem] mt-10 scale-y-125 leading-[0.8] whitespace-nowrap">
        <span>Studio Kern</span>
      </h1>
      
    </motion.div>
  );
};

export default Hero;
