import React from 'react';
import { Link } from "react-router-dom";

import signin from "../assets/signin.svg";

const Signin = () => {
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="bg-relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
          <img src={signin} alt="Signin" />

        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">WELCOME</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">SIGNIN HERE</p>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-800 font-semibold mb-2">Email Address</label>
              <input className="py-2 px-3 border-2 rounded-2xl" type="text" id="email" placeholder="Email Address" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-gray-800 font-semibold mb-2">Address</label>
              <input className="py-2 px-3 border-2 rounded-2xl" type="text" id="address" placeholder="Address" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="text-gray-800 font-semibold mb-2">Password</label>
              <input className="py-2 px-3 border-2 rounded-2xl" type="password" id="password" placeholder="Password" />
            </div>
            <Link to="/login">
              <button className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                Sign-In
              </button>
            </Link>
            <span className="text-sm mt-2 text-blue-500 cursor-pointer">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
