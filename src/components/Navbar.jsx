import React from "react";
import { div } from "motion/react-client";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "intro" },
    { name: "Works", id: "works" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full py-2 px-9 flex justify-between items-center mt-4">
      {/* <div
        className="pointer-events-auto font-black text-3xl ms-5  cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        JG
      </div> */}

      <ul className="flex-col  text-md uppercase gap-10 font-semibold me-4 space-y-4">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer">
            <FlipLink onClick={() => scrollToSection(link.id)}>
              {link.name}
            </FlipLink>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg underline underline-offset-10 hover:no-underline uppercase cursor-pointer mr-10 group relative">
        Let's connect
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-800 ease-out group-hover:w-full"/>
      </div>
    </div>
  );
};

const FlipLink = ({ children, onClick }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 0.85 }}
    >
      <motion.div
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
