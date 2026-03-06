import React from "react";
import { Menu } from "lucide-react";
import { Instagram, Phone } from "lucide-react";
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
      <div className="pointer-events-auto font-bold text-white text-xl">
        KERN.
      </div>
      <div className="flex flex-col gap-2 cursor-pointer group">
        <div className="w-10 h-1 bg-white rounded-3xl transition-all group-hover:w-8"></div>
        <div className="w-10 h-1 bg-white rounded-3xl transition-all group-hover:w-10"></div>
      </div>
      <div className="flex gap-6 pointer-events-auto">
        <div className="cursor-pointer w-12 h-12 border-2 rounded-full flex items-center justify-center text-white text-xs">
          <Instagram />
        </div>
        <div className="cursor-pointer w-12 h-12 border-2 rounded-full flex items-center justify-center text-white text-xs">
          <Phone />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
