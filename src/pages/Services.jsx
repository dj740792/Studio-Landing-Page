import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "Advertising",
    image: "/serviceImgs/serviceImg3.jpg",
  },
  {
    title: "Music Video",
    image: "/serviceImgs/serviceImg4.jpg",
  },
  {
    title: "Events",
    image: "/serviceImgs/serviceImg1.avif",
  },
  {
    title: "Short Films",
    image: "/serviceImgs/serviceImg5.jpg",
  },
  {
    title: "Documentaries",
    image: "/serviceImgs/serviceImg6.jpg ",
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
      className="relative w-full min-h-screen px-4 md:px-8 lg:px-10 py-24 md:py-32 flex flex-col"
      onMouseMove={(e) =>
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
      onMouseLeave={() => setActiveService(null)}
    >
      {/* Heading */}

      <div className="mb-20">
        <h2 className="font-Satoshi-black uppercase text-4xl md:text-6xl lg:text-7xl">
          Services
        </h2>

        <p className="uppercase text-xs md:text-sm opacity-70 mt-2">
          ( What we can do for you )
        </p>
      </div>

      {/* Floating Image - Desktop */}

      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.96, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              left: mousePosition.x - 110,
              top: mousePosition.y - 100,
            }}
            transition={{
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
              type: "spring",
              stiffness: 180,
              damping: 22,
            }}
            className="hidden md:block fixed z-50 pointer-events-none"
          >
            <div className="xl:w-120 xl:h-70 lg:w-80 lg:h-50 md:w-70 md:h-50 overflow-hidden rounded-xl">
              <img
                key={activeService}
                src={servicesData[activeService].image}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Preview */}

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

      {/* Services */}

      <div className="flex flex-col items-center justify-center flex-1 gap-y-4">
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
            className={`cursor-pointer font-Satoshi-black uppercase text-center transition-all duration-300 text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-none 
              ${
                activeService === null
                  ? "text-black"
                  : activeService === index
                    ? "text-black"
                    : "text-black/20"
              }`}
          >
            {service.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Services;
