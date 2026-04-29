import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSec = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  
  const width = useTransform(scrollYProgress, [0, 0.5], ["27vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["40vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["8px", "8px"]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-gray-950">

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden "
          style={{ width, height, borderRadius }}
        >
       
          <video
            src="/videos/ScrollVid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
  
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSec;