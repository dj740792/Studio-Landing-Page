import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Works = () => {
  const works = [
    { id: 1, title: "KERN X L/V", img: "/pic6.jpg" },
    { id: 2, title: "Indian Love", img: "/pic7.jpg" },
    { id: 3, title: "The BLues", img: "/pic5.jpg" },
    { id: 4, title: "Studio M&T", img: "/pic18.jpg" },
  ];
  const [expanedIndex, setExpanedIndex] = useState(0);
  return (
    <div className="h-screen w-full flex">
      <div className="h-screen w-[15vw] flex justify-center items-center">
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="flex items-center justify-center h-full w-[40%] border-x-6 border-black">
            <h1 className="text-5xl font-bold uppercase rotate-270 text-nowrap tracking-wide">
              our works
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[85vw] h-screen flex justify-center items-center">
        <div className="h-[80vh] w-[70vw]  flex flex-nowrap gap-5 ">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              onMouseEnter={() => setExpanedIndex(index)}
              className="relative h-full overflow-hidden cursor-pointer rounded-2xl"
              animate={{ flex: expanedIndex === index ? 4 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <img
                src={work.img}
                alt={work.title}
                className="absolute w-full h-full object-cover"
              />
              <AnimatePresence>
                {expanedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-10 left-10 z-10 "
                  >
                    <h2 className="text-white  text-5xl font-bold uppercase tracking-wide">
                      {work.title}
                    </h2>
                   
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
