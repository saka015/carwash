import React, { useState, useEffect } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import data from "../assets/data.json"; // Import JSON data using require

const OurServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // Set the services data from the imported JSON
    setServicesData(data);
  }, []);

  return (
    <div className="our-services bg-violet-200">
      <div className="py-2 px-3">
        <h1 className="bg-violet-600 text-white text-xl w-1/6 text-center py-3">
          Our Services
        </h1>
      </div>

      <div className="search  ml-[170px] p-1 mt-6">
        <input
          className="search-box  w-[400px] h-10 text-slate-600 p-2"
          type="text"
        />
        <MdOutlinePersonSearch className=" text-4xl ml-2 float-right right-0 mr-1 text-violet-600 cursor-pointer" />
      </div>

      <div className="services-list mx-12">
        <ul>
          {servicesData.map((service, index) => (
            <li className=" nohover  py-4" key={index}>
              <div className="service-detail flex py-4 bg-violet-100 pb-4">
                <div className="left-service-detail flex -ml-48">
                  <GrUserWorker className="text-6xl" />
                  <div className="">
                    <h1 className="my-2 mx-2">{service.name}</h1>
                    <h2 className="my-2 mx-2">{service.city}</h2>
                  </div>
                </div>
                <div className="right-service-detail flex">
                  <div className="my-1">
                    <h2 className="my-1">${service.hourly_rate}/hr</h2>
                    <h2 className="my-1">
                      {service.rating} <span className="text-[13px] ml-1 mt-[2px] absolute">⭐</span>
                    </h2>
                  </div>
                  <button className="book-now ml-24 absolute  my-3">
                    Book Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
