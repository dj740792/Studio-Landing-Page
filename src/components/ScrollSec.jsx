import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSec = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const width        = useTransform(scrollYProgress, [0, 0.5], ["27vw", "90vw"]);
  const height       = useTransform(scrollYProgress, [0, 0.5], ["40vh", "90vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["12px", "8px"]);

  return (
    // no negative margin — starts naturally after hero
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="overflow-hidden"
          style={{ width, height, borderRadius }}
        >
          <img
            src="/pic2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSec;