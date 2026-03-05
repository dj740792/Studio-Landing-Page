import React from "react";
import { Menu } from "lucide-react";


const Navbar = () => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center py-3 px-5 ">
        <Menu className="scale-125 cursor-pointer" />
        <div className="flex items-center gap-6">
         
        <button className="cursor-pointer  relative border py-3 px-6 text-md rounded-full overflow-hidden group font-bold transition-all duration-500 ease-out scale-85">
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
          
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 ease-out uppercase tracking-wider">
            Let's Connect
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
