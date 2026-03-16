import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-7xl font-bold text-center leading-tight">
        brand <br />
        experience <br />
        studio
      </h1>
    </motion.div>
  );
};

export default Hero;