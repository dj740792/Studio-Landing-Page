import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full p-12 flex justify-between items-center z-50 m-5 motion-preset-slide-down">
      <div
        className="pointer-events-auto font-black text-3xl ms-5 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        KERN.
      </div>

      <ul className="flex text-lg uppercase gap-10 font-semibold me-5">
        <li className="cursor-pointer" onClick={() => scrollToSection("about")}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection("works")}>
          Works
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          Services
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>

      <div className="font-bold text-xl underline underline-offset-8 hover:no-underline uppercase cursor-pointer mr-10 group relative">
        Let's connect
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-800 ease-out group-hover:w-full" />
      </div>
    </div>
  );
};

export default Navbar;
