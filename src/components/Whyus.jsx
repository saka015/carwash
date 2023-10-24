import React from "react";

import carwash from "../assets/washcar2.jpg";

const WhyUs = () => {
  return (
    <div className="flex patch my-12">
      <div className="right-about  mt-6">
        <img src={carwash} width="500px" alt="" />
      </div>
      <div className="left-about ">
        <p className="font-medium">ABOUT</p>
        <h1 className="text-4xl -ml-[1.7in] text-center font-semibold mt-2">
          WHY CHOOSE US ?
        </h1>
        <div className="line bg-violet-600 w-[150px] my-4 h-1"></div>
        <p className="abt-p w-[400px] break-words font-medium text-[14px]">
          Choose Xarwash for unrivaled cleanliness and convenience. Our
          cutting-edge technology and eco-friendly practices ensure spotless and
          sustainable results. With a user-friendly interface and flexible
          scheduling, we make car washes a breeze. Trust Xarwash for a pristine,
        </p>
        <li className="mt-2 underline font-medium list-none  text-[13px]">
          Lorem, ipsum dolor.
        </li>
        <p className='font-medium text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          possimus.
        </p>
        <li className="mt-2 underline font-medium list-none  text-[13px]">
          Lorem, ipsum dolor.
        </li>
        <p className='font-medium text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          possimus.
        </p>
        <li className="mt-2 underline font-medium list-none  text-[13px]">
          Lorem, ipsum dolor.
        </li>
        <p className='font-medium text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          possimus.
        </p>
        <li className="mt-2 underline font-medium list-none  text-[13px]">
          Lorem, ipsum dolor.
        </li>
        <p className='font-medium text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          possimus.
        </p>
        <li className="mt-2 underline font-medium list-none  text-[13px]">
          Lorem, ipsum dolor.
        </li>
        <p className='font-medium text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          possimus.
        </p>
    
      </div>
    </div>
  );
};

export default WhyUs;
