import React from "react";

import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="cta  flex gap-x-7  w-full py-10 bg-slate-600 px-12">
      <div className="cta-left w-[670px]">
        <h1 className="text-3xl  font-medium text-white">
          Need One Of Our Services? Get Quote Now,or Give Us a Call for a Free
          Estimate. | 957-452-5230
        </h1>
      </div>
      <div className="cta-right">
        <Link to="/ourservices">
          <button className="cta-btn mt-4 font-semibold text-white mr-44">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
