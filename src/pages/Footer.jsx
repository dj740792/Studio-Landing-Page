import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "About", id: "intro" },
    { name: "Works", id: "works" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <footer className="w-full mt-10">
      <div className="bg-black text-white rounded-t-[28px] min-h-[70vh] flex flex-col justify-around px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14 overflow-hidden">
        
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
          
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <p className="uppercase text-lg sm:text-xl leading-relaxed">
              SEE HOW WE CAN HELP YOUR
              <br />
              BRAND GROW.
            </p>

            <p className="mt-10 text-sm sm:text-base opacity-90">
              ©2026 Studio Glass &nbsp; • &nbsp; All rights reserved.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <ul className="flex flex-col uppercase text-lg sm:text-xl gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="cursor-pointer w-fit"
                >
                  <FlipLink
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                  >
                    {link.name}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 ">
            <h3 className="uppercase text-xl ">
              Connect
            </h3>

            <div className="text-xl leading-relaxed ">
              info@studioglass.com
              <br />
              New Delhi, India
            </div>

            <div className="flex items-center gap-5 mt-2">
              <Instagram
                size={24}
                className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
              />

              <XIcon
                sx={{ fontSize: 24 }}
                className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
              />

              <Linkedin
                size={24}
                className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="-mb-50 overflow-hidden ">
          <h1 className="text-[16vw] sm:text-[13vw] lg:text-[11vw] leading-none tracking-tight uppercase text-center whitespace-nowrap">
            STUDIO GLASS
          </h1>
        </div>
      </div>
    </footer>
  );
};

const FlipLink = ({ children, onClick }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 0.9 }}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Footer;