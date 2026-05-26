import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic6.jpg",
  "/pic7.jpg",
  "/pic10.jpg",
  "/pic11.jpg",
  "/pic14.jpg",
  "/pic17.jpg",
  "/pic19.jpg",
  "/pic20.jpg",
  "/pic21.jpg",
];
const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        const increment = prev < 60 ? 1 : prev < 85 ? 2 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center "
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex ">
            <div className="w-60 h-60 rounded-xl overflow-hidden relative">
              <AnimatePresence initial={false}>
                <motion.img
                  key={imgIndex}
                  src={images[imgIndex]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{
                    y: "110%",
                    rotate:-2,
                  }}
                  animate={{
                    y: "0%",
                    rotate:0,
                  }}
                  exit={{
                    y: "-100%",
                  }}
                  transition={{
                    duration: 0.7,
                    ease:"easeOut",
                    rotate:1.5,
                  }}
                  style={{
                    willChange:"transform"
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
