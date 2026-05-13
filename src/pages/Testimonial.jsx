import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Carter",
    role: "Creative Director",
    company: "Northstar Studio",
    image: "/testiImgs/profilePic1.jpg",
    review:
      "The whole process felt surprisingly natural. Nothing ever felt forced, and the final work genuinely captured what we had in mind.",
    className: "top-[5%] left-[8%]",
    rotate: "3",
  },
  {
    id: 2,
    name: "Daniel Lee",
    role: "Founder",
    company: "Atelier Labs",
    image: "/testiImgs/profilePic2.jpg",
    review:
      "What stood out most was the attention to detail. Even the smallest decisions felt thoughtful and intentional throughout.",
    className: "top-[3%] right-[14%]",
    rotate: "3",
  },
  {
    id: 3,
    name: "Sophia Carter",
    role: "Brand Strategist",
    company: "Veloura",
    image: "/testiImgs/profilePic3.jpg",
    review:
      "Everything came together in a way that felt authentic to us. The collaboration was smooth, clear, and genuinely enjoyable.",
    className: "bottom-[3%] left-[12%]",
    rotate: "3",
  },
  {
    id: 4,
    name: "Emma Collins",
    role: "Art Lead",
    company: "Monolith",
    image: "/testiImgs/profilePic4.jpg",
    review:
      "It's rare finding creatives who care this much about both the feeling and the execution. ",
    className: "bottom-[5%] right-[6%]",
    rotate: "3",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: "120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Testimonial = () => {
  return (
    <section className="relative min-h-250 w-full overflow-hidden px-10 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="leading-none text-center text-[5vw] z-20">
          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants}>Stories</motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants}>worth</motion.h1>
          </div>

          <div>
            <motion.h1 variants={itemVariants}>sharing</motion.h1>
          </div>
        </div>

        <div className="overflow-hidden mt-10 max-w-2xl">
          <motion.p
            variants={itemVariants}
            className="text-center text-xl font-sans font-semibold leading-relaxed "
          >
            The most meaningful part of this journey is the people we've had the
            chance to create with. We're grateful to share a few experiences
            from the clients and collaborators behind the work.
          </motion.p>
        </div>
      </motion.div>

      {/* FLOATING CARDS */}
      {testimonials.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.className} group perspective-distant`}
          animate={{
            y: [0, -12, 0], x:[0, -12, 0]
          
          }}
          transition={{
            duration: 5 + item.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-80 h-110 transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] cursor-pointer">
            {/* FRONT */}
            <div
              className={`absolute inset-0 rounded-lg border border-black outline-6 outline-white  overflow-hidden backface-hidden  `}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BACK */}
            <div
              className={`absolute inset-0 bg-blue-400 text-white rounded-lg border-2 border-white outline outline-black p-6 flex flex-col justify-between transform-[rotateY(180deg)] backface-hidden   rotate-${item.rotate}`}
            >
              <p className="text-2xl leading-relaxed ">"{item.review}"</p>

              <div className="flex flex-col">
                <span className="text-xl">{item.name}</span>

                <span className="text-lg mt-1">
                  {item.role} &nbsp;- &nbsp;
                  {item.company}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Testimonial;
