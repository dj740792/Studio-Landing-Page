import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const items = Array(8).fill("Why Choose Us");

  const services = [
    {
      id: 1,
      title: "IN STUDIO OR NATURAL LIGHT LOCATION",
      img: "/pic13.jpg",
    },
    {
      id: 2,
      title: "DESIGNED FOR EMOTIONAL BRAND CONNECT",
      img: "/pic13.jpg",
    },
    {
      id: 3,
      title: "CINEMATIC LIGHTING & PROFESSIONAL SETUPS",
      img: "/pic13.jpg",
    },

    {
      id: 4,
      title: "PERSONALIZED CREATIVE CONCEPT DEVELOPMENT",
      img: "/pic13.jpg",
    },
    {
      id: 5,
      title: "PERFECT FOR BRANDS, CREATORS & BUSINESSES",
      img: "/pic13.jpg",
    },
  ];
  return (
    <section className="h-screen  overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap h-[15%] py-10 ">
        {/* Moving WHY CHOOSE US Strip */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap shrink-0"
          style={{ willChange: "transform" }}
        >
          {[...items, ...items].map((_, i) => (
            <h2
              key={i}
              className="text-3xl font-bold uppercase pr-16 tracking-tighter"
            >
              Why Choose Us
            </h2>
          ))}
        </motion.div>
      </div>
      {/* Services section */}
      <div className="w-full h-[85%] flex ">
        <div className="w-4/6 flex justify-center items-center">
          <div className="h-[80%] w-[80%] border-t-2 border-b-2 flex flex-col">
            {services.map((item) => (
              <div
                key={item.id}
                className="flex-1 border-b last:border-0 flex items-center justify-between group cursor-pointer"
              >
                {/* Title */}
                <h3 className="text-3xl uppercase font-bold tracking-tighter">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
