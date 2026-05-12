import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Videography",
    desc: "Cinematic storytelling and premium visual campaigns.",
    image: "/cardImg2.jpg",
  },
  {
    title: "Photography",
    desc: "Editorial and fashion photography for modern brands.",
    image: "/cardImg1.avif",
  },
  {
    title: "Creative Direction",
    desc: "Visual identity and campaign execution.",
    image: "/cardImg3.jpg",
  },
  {
    title: "Collaborations",
    desc: "Retouching, grading and visual refinement.",
    image: "/cardImg4.jpg",
  },
];

const Card = ({ i, title, desc, image, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative w-[95vw] h-[85vh] rounded-3xl overflow-hidden origin-top"
      >
        <img
          src={image}
          alt=""
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
          <h1 className="text-8xl font-bold leading-none mb-4">{title}</h1>

          <p className="text-xl max-w-xl mb-8">{desc}</p>

          <button className="border border-white px-6 py-3 w-fit uppercase text-sm tracking-widest hover:bg-white hover:text-black transition">
            Find Out More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative ">
      <div className="h-screen flex flex-col items-center justify-center text-center px-10 ">
        <p className="uppercase tracking-[0.3em] text-lg mb-6">Services</p>

        <h1 className="text-[9vw]  leading-[0.9] uppercase">
          WHAT WE CAN
          <br />
          DO FOR YOU
        </h1>
      </div>

      {/* CARDS */}
      {services.map((service, i) => {
        const targetScale = 1 - (services.length - i) * 0.05;

        return (
          <Card
            key={i}
            i={i}
            {...service}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Services;
