import React from "react";

import car_svg from "../assets/svg-car.svg";

const Main = () => {
  return (
    <div className="main flex pt-[130px] bg-violet-50 h-[90vh] ">
      <div className="left-main ml-6 mt-16 ">
        <h1 className="text-6xl font-semibold  mt-4">Get your car washed!</h1>
        <p className="text-xl font-semibold mt-4 text-slate-600">
          Best Services with reasonable price
        </p>
        <button className="appointment mt-4 font-semibold text-violet-600">
          Book Appointment
        </button>
      </div>
      <div className="right-main ml-24">
        <img src={car_svg} width="550px" alt="" />
      </div>
    </div>
  );
};

export default Main;
