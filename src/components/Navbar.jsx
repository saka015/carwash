import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-600 p-2 pb-4">
      <div className="left ml-4 mt-2 text-2xl text-black">LOGO</div>
      <div className="right flex gap-x-2">
        <ul className="flex gap-x-7 mr-12 text-sm mt-4 text-white font-semibold cursor-pointer">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>OUR WORK</li>
          <li>CONTACT US</li>
        </ul>
          {" "}
          <button className="nav-btns mt-2 mr-4 bg-violet-500 rounded-full">
            Get Service
          </button>
        <button className="nav-btns mt-2 mr-4 bg-violet-500 rounded-full">
          Join us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
