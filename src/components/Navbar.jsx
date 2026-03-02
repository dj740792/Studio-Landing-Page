import React from "react";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center py-3 px-5 ">
        <Menu className="scale-125 cursor-pointer" />
        <h1 className="ml-20 text-4xl scale-180 font-extrabold font-qurova">VARN</h1>
        <button className="cursor-pointer relative border-2 py-3 px-6 text-md rounded-full overflow-hidden group font-bold transition-all duration-500 ease-out scale-85">
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>

          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 ease-out uppercase tracking-wider">
            Let's Connect
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
