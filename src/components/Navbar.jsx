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
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full py-2 px-9 flex justify-between items-center mt-4">
      <div
        className="pointer-events-auto font-black text-3xl ms-5 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        KERN.
      </div>

      <ul className="flex text-md uppercase gap-10 font-semibold me-4">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer">
            <FlipLink onClick={() => scrollToSection(link.id)}>
              {link.name}
            </FlipLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FlipLink = ({ children, onClick }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onclick={onClick}
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
