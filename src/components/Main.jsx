import React from "react";

const Hero = () => {
  return (
    <div className=" w-full h-[86vh]">
      <div className="flex items-center justify-center h-full flex-col">
        <h1 className="font-roboto font-bold text-9xl">
          STUDIO <br /> <span className="font-qurova text-[200px]">VARN.</span>
        </h1>
        <h3 className="text-lg mt-4 flex flex-col items-center font-semibold">
          We Are a Boutique Creative Studio Specialized in Crafting Storytelling <br /> <span>through Digital Content & Photos.</span>
        </h3>

        <button className="mt-3 cursor-pointer relative border-2 py-3 px-6 text-md rounded-full overflow-hidden group font-bold transition-all duration-500 ease-out scale-85 hover:scale-103">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>

          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 ease-out uppercase tracking-wider">
            Let's Connect
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
