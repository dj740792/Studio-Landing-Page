import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaButton = ({ text = "Tell us your story" }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className="cursor-pointer flex items-center bg-[#f8f8ef] text-black rounded-md  scale-75 sm:scale-100 mt-10" 
    >
      

      <div className="px-8 py-5 overflow-hidden">
        <div
          className="relative block overflow-hidden whitespace-nowrap"
          style={{ lineHeight: 0.9 }}
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="text-md md:text-md lg:text-lg xl:text-xl 2xl:text-xl "
          >
            {text}
          </motion.div>

          <motion.div
            className="absolute inset-0 text-md md:text-md lg:text-lg xl:text-xl 2xl:text-xl  "
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>

      

      <div className="mr-2 w-12 h-12 bg-black text-white rounded-lg overflow-hidden flex items-center justify-center ">
        <div
          className="relative block overflow-hidden"
          style={{ lineHeight: 0.9 }}
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <ArrowUpRight size={27} />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <ArrowUpRight size={27} />
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
};

export default CtaButton;