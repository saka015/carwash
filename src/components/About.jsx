import React from 'react'

import carwash from '../assets/washcar.jpg'

const About = () => {
  return (
    <div className="flex about my-12 z-7888">
      <div className="left-about mx-20">
        <p className="font-medium">ABOUT</p>
        <h1 className="text-4xl text-center font-semibold mt-2">
          CARWASH DONE RIGHT
        </h1>
        <div className="line bg-violet-600 w-[150px] my-4 h-1"></div>
        <p className="abt-p w-[400px] break-words font-medium text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio totam
          voluptate iste incidunt natus ducimus! Officia ipsam alias optio,
          dignissimos porro inventore fugiat ex, cum similique dolore temporibus
          et in ad aperiam doloribus voluptatibus, esse possimus reprehenderit.
          Itaque, ut asperiores soluta adipisci laborum ratione suscipit
          aspernatur hic! Id, repellat quidem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime, voluptates.
          <li className="mt-2 text-[13px]">
            100% Customer Satisfaction Guaranteed
          </li>
          <li className="text-[13px]">Very reasonalble and fair prices </li>
          <li className="text-[13px]">
            100% Eco-Friendly environtally prodcts
          </li>
          <li className="text-[13px]">
            Unmatched customer services & customer satifaction
          </li>
        </p>
      </div>
      <div className="right-about mx-20 mt-6">
        <img src={carwash} width="500px" alt="" />
      </div>
    </div>
  );
}

export default About