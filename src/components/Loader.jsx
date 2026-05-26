import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // increment counter from 0 to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // small pause at 100 before revealing
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        // speeds up as it gets closer to 100 — feels natural
        const increment = prev < 60 ? 1 : prev < 85 ? 2 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0e0e0e] flex flex-col justify-between px-10 py-10"
          exit={{
            // wipes upward revealing the site underneath
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* top row */}
          <div className="flex justify-between items-center">
            <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
              Studio Glass
            </p>
            <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
              Fashion · Editorial · Brand
            </p>
          </div>

          {/* center — big counter */}
          <div className="flex items-end justify-between">
            <motion.h1
              className="text-white font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(80px, 18vw, 260px)" }}
            >
              {count}
              <span
                className="text-white/30"
                style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
              >
                %
              </span>
            </motion.h1>

            {/* loading label bottom right */}
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">
              Loading
            </p>
          </div>

          {/* progress bar */}
          <div className="w-full h-px bg-white/10">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;