import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const items = Array(5).fill("Why Choose Us Studio Kern");

  const services = [
    { id: 1, title: "IN STUDIO OR NATURAL LIGHT LOCATION", img: "/pic16.jpg" },
    { id: 2, title: "DESIGNED FOR EMOTIONAL BRAND CONNECT", img: "/pic14.jpg" },
    {
      id: 3,
      title: "CINEMATIC LIGHTING & PROFESSIONAL SETUPS",
      img: "/pic15.jpg",
    },
    {
      id: 4,
      title: "PERSONALIZED CREATIVE CONCEPT DEVELOPMENT",
      img: "/pic13.jpg",
    },
    {
      id: 5,
      title: "PERFECT FOR BRANDS CREATORS & BUSINESSES",
      img: "/pic17.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-screen overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap shrink-0"
          style={{ willChange: "transform" }}
        >
          {[...items, ...items].map((_, i) => (
            <h2
              key={i}
              className="text-5xl font-bold uppercase pr-16 tracking-wide"
            >
              Why Choose Us
            </h2>
          ))}
        </motion.div>
      </div>

      <div className="w-full h-[85%] flex">
        <div className="w-4/6 flex justify-center items-center">
          <div className="h-[80%] w-[80%] border-y flex flex-col">
            {services.map((item, index) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex-1 border-b last:border-0 flex items-center justify-between group cursor-pointer"
                animate={{ x: activeIndex === index ? 12 : 0 }}
              >
                <h3 className="text-3xl uppercase font-bold tracking-tighter">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-2/6 justify-center flex items-center">
          <div className="w-[80%] h-[85%] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={services[activeIndex].img}
                src={services[activeIndex].img}
                alt="serviceImg"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
