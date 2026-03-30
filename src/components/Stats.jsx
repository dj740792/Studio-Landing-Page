import React from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    id: 1,
    type: "image",
    img: "/pic7.jpg",
    label: "Completed Shoots",
    value: "200+",
    description: "Brands across India & International",
    gridArea: { gridRow: "1 / 3" },
    numSize: "clamp(56px, 5vw, 88px)",
  },
  {
    id: 2,
    type: "image",
    img: "/pic6.jpg",
    label: "Locations",
    value: "100+",
    description: "Unique shoot locations",
    gridArea: { gridColumn: 2, gridRow: 1 },
    numSize: "clamp(44px, 3.5vw, 64px)",
  },
  {
    id: 3,
    type: "quote",
    quote: "Every frame we shoot is a story worth telling.",
    attr: "Studio Kern. — Est. 2021",
    gridArea: { gridColumn: 3, gridRow: 1 },
  },
  {
    id: 4,
    type: "cream",
    label: "Years Active",
    value: "3+",
    description: "Working with every scale of brand",
    gridArea: { gridColumn: 2, gridRow: 2 },
    numSize: "clamp(44px, 3.5vw, 64px)",
  },
  {
    id: 5,
    type: "image",
    img: "/pic16.jpg",
    label: "Returning Clients",
    value: "100+",
    description: "Came back for their next project",
    gridArea: { gridColumn: 3, gridRow: 2 },
    numSize: "clamp(44px, 3.5vw, 64px)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cellVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Pill = ({ label, dark = false }) => (
  <span
    className={`inline-block text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border w-fit mb-3 ${
      dark ? "border-black/20 text-black/50" : "border-white/25 text-white/60"
    }`}
  >
    {label}
  </span>
);

const Stats = () => {
  return (
    <section className="w-full h-screen py-15 px-18">
      <p className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-10">
        Studio Kern. — Numbers
      </p>

      <motion.div
        className="grid gap-2.5"
        style={{
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "320px 220px",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {statsData.map((stat) => {
          if (stat.type === "image") {
            return (
              <motion.div
                key={stat.id}
                variants={cellVariants}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={stat.gridArea}
              >
                <motion.img
                  src={stat.img}
                  alt={stat.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <Pill label={stat.label} />
                  <p
                    className="text-white font-bold leading-none tracking-tighter"
                    style={{ fontSize: stat.numSize }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/55 mt-2">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          }

          if (stat.type === "quote") {
            return (
              <motion.div
                key={stat.id}
                variants={cellVariants}
                className="rounded-2xl bg-[#0e0e0e] flex flex-col justify-between p-7"
                style={stat.gridArea}
              >
                <span className="text-6xl leading-none text-white/10 font-serif">"</span>
                <p className="text-white font-semibold text-[17px] leading-[1.55]">
                  {stat.quote}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                  {stat.attr}
                </p>
              </motion.div>
            );
          }

          if (stat.type === "cream") {
            return (
              <motion.div
                key={stat.id}
                variants={cellVariants}
                className="rounded-2xl flex flex-col justify-end p-7"
                style={{ ...stat.gridArea, backgroundColor: "#F2EDE4" }}
              >
                <Pill label={stat.label} dark />
                <p
                  className="font-bold leading-none tracking-tighter text-black"
                  style={{ fontSize: stat.numSize }}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.22em] uppercase text-black/40 mt-2">
                  {stat.description}
                </p>
              </motion.div>
            );
          }
        })}
      </motion.div>
    </section>
  );
};

export default Stats;