import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-bold text-center">
        brand <br />
        experience <br />
        studio
      </h1>
    </motion.div>
  );
};

export default Hero;