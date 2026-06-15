import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/loaderImgs/pic1.jpg",
  "/loaderImgs/pic2.jpg",
  "/loaderImgs/pic3.jpg",
  "/loaderImgs/pic4.jpg",
  "/loaderImgs/pic5.jpg",
  "/loaderImgs/pic6.jpg",
  "/loaderImgs/pic7.jpg",
  "/loaderImgs/pic8.jpg",
  "/loaderImgs/pic9.jpg",
  "/loaderImgs/pic10.jpg",
  "/loaderImgs/pic11.jpg",
];

const Loader = ({ onComplete }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= images.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 200);
        return;
      }
      setImgIndex(current);
    }, 280);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-10 flex items-center justify-center"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.9, ease: [0.26, 0, 0.64, 1] }}
        >
          {/* responsive image box */}
          <div
            className="relative overflow-hidden rounded-xl
              w-32 h-44
              sm:w-36 sm:h-28
              md:w-40 md:h-36
              lg:w-44 lg:h-50"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.img
                key={imgIndex}
                src={images[imgIndex]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ y: "100%", scale: 1.08 }}
                animate={{ y: "0%", scale: 1 }}
                exit={{ y: "-100%", scale: 1.08 }}
                transition={{
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{ willChange: "transform" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;