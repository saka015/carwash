import React from "react";

import { SlCalender } from "react-icons/sl";
import { FaHandsHelping, FaDollarSign } from "react-icons/fa";

const Patch = () => {
  return (
    <div className="patch flex justify-around w-full py-10 bg-slate-600 px-[350px]">
      <div className="flex">
        <SlCalender className="text-violet-300 text-5xl" />
        <h1 className="text-white mt-2 ml-2">True Estimate</h1>
      </div>
      <div className="flex">
        <FaHandsHelping className="text-violet-300 text-5xl" />
        <h1 className="text-white mt-2 ml-2">Quality Assurance</h1>
      </div>
      <div className="flex">
        <FaDollarSign className="text-violet-300 text-5xl" />
        <h1 className="text-white mt-2 ml-2">Affordable Prices</h1>
      </div>
    </div>
  );
};

export default Patch;
