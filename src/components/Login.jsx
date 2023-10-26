import React from "react";
import { Link } from "react-router-dom";

import signin from "../assets/signin.svg";

const Signin = () => {
  return (
    <div>
      <form method="get" className="h-screen md:flex">
        <div className="bg-relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
          <img src={signin} alt="Signin" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">WELCOME</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Login Here
            </p>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-gray-800 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                className="py-2 px-3 border-2 rounded-none"
                type="text"
                autoComplete="Off"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="address"
                className="text-gray-800 font-semibold mb-2"
              >
                Address
              </label>
              <input
                className="py-2 px-3 border-2 rounded-none"
                type="text"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="password"
                className="text-gray-800 font-semibold mb-2"
              >
                Password
              </label>
              <input
                className="py-2 px-3 border-2 rounded-none"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <Link to="/">
              <button className="block w-full bg-violet-600 mt-4 py-2 rounded-full text-white font-semibold mb-2 hover:opacity-[0.8]">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="block w-full bg-violet-100 text-violet-600 mt-4 py-2 rounded-full  font-semibold mb-2  border hover:border-violet-600">
                Sign-Up
              </button>
            </Link>
            <span className="text-sm mt-2 text-blue-500 cursor-pointer">
              Forgot Password?
            </span>
          </form>
        </div>
      </form>
    </div>
  );
};

export default Signin;
