import React from "react";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center p-3 ">
        <Menu className="scale-125 cursor-pointer" />
        <h1 className="text-5xl scale-150 font-extrabold">VARN</h1>
        <button className="cursor-pointer relative border-2 border-white py-3 px-6 text-md rounded-full overflow-hidden group font-bold transition-all duration-500 ease-out">
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>

          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 ease-out uppercase tracking-wider">
            Lets Connect
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
