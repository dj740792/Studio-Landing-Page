import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSec = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // as you scroll, image grows from small to full screen
  const width = useTransform(scrollYProgress, [0, 1], ["40%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["60vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["16px", "0px"]);

  return (
    // pin this section so it stays in place while you scroll through it
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, height, borderRadius }}
          className="overflow-hidden"
        >
          <img src="/pic2.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollSec;
