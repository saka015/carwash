import React from "react";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const Services = () => {
  return (
    <div className="services flex py-8 p-4">
      <div className="left-services ml-4  z-10 text-white">
        <p className="font-medium">WHAT WE DO</p>
        <h1 className="text-4xl  mt-2 w-[250px] font-semibold ">
          SERVICES WE PROVIDE
        </h1>
        <div className="line bg-violet-600 w-[150px] my-4 h-1"></div>
        <p className="abt-p w-[250px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita
          accusantium provident. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Velit veniam quisquam quamcusantium provident. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Velit veniam
          quisquam quam.ipsum dolor, sit amet consectetur adipisicing elit.
          Velit veniam quisquam quam.
        </p>
      </div>
      <div className="right-services flex gap-x-12 ml-20">
        <div className="card ">
          <img src={card1} alt="" />
          <h1 className="mt-2 w-[100px] text-xl text-center font-semibold text-white ml-[75px]">
            Curbside Express
          </h1>

          <p className="mt-4 text-center text-white">Bring In & Out Wash</p>
        </div>
        <div className="card ">
          <img src={card2} alt="" />
          <h1 className="mt-2 w-[100px] text-xl text-center font-semibold text-white ml-[75px]">
            Curbside Express
          </h1>

          <p className="mt-4 text-center text-white">Bring In & Out Wash</p>
        </div>
        <div className="card ">
          <img src={card2} alt="" />
          <h1 className="mt-2 w-[100px] text-xl text-center font-semibold text-white ml-[75px]">
            Curbside Express
          </h1>

          <p className="mt-4 text-center text-white">Bring In & Out Wash</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
