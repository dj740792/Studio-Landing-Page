import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen  flex flex-col  items-center top-[15%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-qurova md:text-[14rem] mt-12 scale-y-125 tracking-tighter leading-[1.2] whitespace-nowrap">
        <span>JULIAN GLASS </span>
      </h1>
      <div className="flex justify-around items-center h-full w-full">
        <div className="text-[6.5rem] md:text-[9rem] font-black leading-none">
          20
        </div>

        <div className="flex flex-col items-center  gap-6 font-qurova">
          <p className="text-xl">
            ITS NEVER JUST A PHOTO. <br /> EVERY FRAME TELLS A STORY. <br />
            WE CRAFT VISUAL IDENTITIES. <br />
            YOUR BRAND. OUR LENS.
          </p>
        </div>

        <div className="text-[6.5rem] md:text-[9rem] font-black leading-none">
          26
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
