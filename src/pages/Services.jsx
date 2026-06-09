import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { duration } from "@mui/material";

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};
const servicesData = [
  {
    title: "Advertising",
    image: "serviceImg1.avif",
  },
  {
    title: "Music Video",
    image: "serviceImg2.jpg",
  },
  {
    title: "Short Films",
    image: "serviceImg3.jpg",
  },
  {
    title: "Collaborations",
    image: "serviceImg4.jpg",
  },
  {
    title: "Events",
    image: "serviceImg5.jpg",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <section
      className="relative w-full min-h-screen px-4 md:px-8 lg:px-10 2xl:py-50 xl:px-10 py-24 md:py-32 flex flex-col "
      onMouseMove={(e) =>
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
      onMouseLeave={() => setActiveService(null)}
    >
      <div className="mb-12 ml-4 md:ml-10 ">
        <motion.h1
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          services
        </motion.h1>
        <motion.p
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-600"
        >
          (What we can do for you)
        </motion.p>
      </div>
      {/* hover effect for desktop */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.35 },
              scale: { duration: 0.25 },
            }}
            style={{
              left: mousePosition.x - 140,
              top: mousePosition.y - 100,
            }}
            className="hidden md:block fixed z-50 pointer-events-none"
          >
            <div className="hidden md:block z-50 pointer-events-none">
              <img
                src={servicesData[activeService].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <div className="flex justify-center mb-12 md:hidden">
        <AnimatePresence mode="wait">
          {activeService !== null && (
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-52 h-36 rounded-xl overflow-hidden"
            >
              <img
                src={servicesData[activeService].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        {servicesData.map((service, index) => (
          <button
            key={service.title}
            onMouseEnter={() => setActiveService(index)}
            onMouseMove={(e) =>
              setMousePosition({
                x: e.clientX,
                y: e.clientY,
              })
            }
            onClick={() => setActiveService(index)}
            className={` uppercase text-center transition-all duration-300 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none ${
              activeService === null
                ? "text-black"
                : activeService === index
                  ? "text-black"
                  : "text-black/20"
            }`}
          > {service.title}</button>
        ))}
      </div>
    </section>
  );
};

export default Services;
