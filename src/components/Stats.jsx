import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: "200+",
      label: "Completed shoots with brands across India and International",
      // These are the X and Y offsets from your original code
      position: { x: -400, y: -200 },
      theme: "bg-[#d93838]  border-none text-white",
    },
    {
      id: 2,
      value: "100+",
      label: "Locations we have completed our shoots",
      position: { x: 400, y: -200 },
      theme: "bg-[#d93838]  border-none text-white",
    },
    {
      id: 3,
      value: "3+",
      label: "Years of experience with different Brands",
      position: { x: -400, y: 200 },
      theme: "bg-[#d93838]  border-none text-white",
    },
    {
      id: 4,
      value: "100+",
      label: "Satisfied clients came back to us for their next project",
      position: { x: 400, y: 200 },
      theme: "bg-[#d93838]  border-none text-white",
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center  overflow-hidden relative">
      <img
        src="/pic12.jpg"
        className="absolute w-90 h-90 object-cover rounded-[50%] z-0"
        alt="Stats Center Visual"
      />

      {statsData.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            x: stat.position.x,
            y: stat.position.y,
          }}
          viewport={{ once: true }} 
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className={`absolute h-55 w-55 rounded-[50%] border flex justify-center items-center flex-col gap-3 z-10 ${stat.theme}`}
        >
          <h1 className="font-bold text-5xl">{stat.value}</h1>
          <p className="mx-4 font-medium text-sm text-center">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
