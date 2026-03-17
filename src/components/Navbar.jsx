import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
      <div className="pointer-events-auto font-black  text-3xl ms-5">KERN.</div>
      <ul className="flex gap-6 pointer-events-auto me-5">
        <li className="font-black text-xl uppercase cursor-pointer">About</li>
        <li className="font-black text-xl uppercase cursor-pointer">Works</li>
        <li className="font-black text-xl uppercase cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
