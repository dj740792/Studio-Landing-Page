import React from "react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",

          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Intro", id: "intro" },
    { name: "Works", id: "works" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <footer id="footer" className="w-full">
      <div className="bg-zinc-950 text-[#f8f8ef] min-h-[50vh] md:min-h-[70vh] flex flex-col justify-around px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14 overflow-hidden">
        <div className="flex flex-col md:flex-row md:justify-between gap-16 md:px-12 ">
          {/* LEFT */}
          <ul className="flex flex-col  lg:text-2xl xl:text-4xl text-sm md:text-xl font-Satoshi-black uppercase leading:1 md:leading-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className=" cursor-pointer overflow-hidden group"
              >
                <div className="py-4 transition-all duration-500 group-hover:bg-[#f8f8ef] group-hover:text-zinc-950 group-hover:px-4 tracking-wide">
                  {link.name}
                </div>
              </li>
            ))}
          </ul>

          {/* RIGHT */}

          <div className="flex flex-col gap-2 font-Clash-bold   ">
            <p className="font-mono  text-sm opacity-70 tracking-wide  ">
              (Contact Details)
            </p>
            <div className="flex flex-col leading-4 md:text-sm lg:text-lg uppercase">
              {["Instagram ", "LinkedIn ", "Youtube"].map((item) => (
                <div
                  key={item}
                  className=" cursor-pointer overflow-hidden group"
                >
                  <div className="py-3 transition-all duration-500 group-hover:bg-[#f8f8ef] group-hover:text-zinc-950 group-hover:px-6 tracking-wide">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="mailto:info@studionemo.com"
                className="underline underline-offset-4 md:text-sm lg:text-xl lowercase"
              >
                ⮡ info@studionemo.com
              </a>
            </div>
            <div className="mt-5 flex flex-col gap-1 font-mono  text-sm opacity-70 tracking-wide">
              Based In <span>New Delhi,India</span>
              <span className="md:text-sm lg:text-lg opcaity-">{time}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className=" flex flex-col overflow-hidden lg:-mb-28 md:-mb-18">
          <h1 className="flex justify-center md:text-[11vw] lg:text-[10vw] leading-none tracking-tight  text-center whitespace-nowrap opacity-70 text-[#f8f8ef]">
            Studio NEMO {" "}
            <span className="text-sm sm:text-lg md:text-xl lg:text-3xl self-start ">©</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
