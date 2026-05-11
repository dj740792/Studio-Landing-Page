import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const videoWidth = useTransform(scrollYProgress, [0, 0.1], ["100vw", "90vw"]);
  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["100vh", "90vh"],
  );
  const videoRadius = useTransform(scrollYProgress, [0, 0.1], ["0px", "12px"]);
  return (
    <motion.div
      className="relative h-screen  flex flex-col  items-center  text-white"
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
          left: "50%",
          borderRadius: videoRadius,
          x: "-50%",
          zIndex: 0,
        }}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="z-40 top-[15%] relative">
        <h1 className="font-Satoshi-black md:text-[14rem] mt-12 scale-y-125 tracking-tighter leading-[1.2] whitespace-nowrap">
          <span>JULIAN GLASS </span>
        </h1>
        <div className="flex justify-around items-center h-full w-full">
          <div className="text-[6.5rem] md:text-[9rem] font-black leading-none">
            20
          </div>

          <div className="flex flex-col items-center  gap-6 font-Satoshi-black">
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
      </div>
    </motion.div>
  );
};

export default Hero;
