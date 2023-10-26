import React, { useState } from "react";
import { Link } from "react-router-dom";

import Profile from '../components/Profile'

// Create separate components for each option
const Experience = () => <div>Experience Content</div>;
const Services = () => <div>Services Content</div>;
const Settings = () => <div>Settings Content</div>;

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Profile");

  return (
    
    <div className="h-[100vh]">
      
      <h1 className="rounded-full p-2 bg-slate-400 w-1/6 text-center m-3">
        Hello Saka!
      </h1>

      <div className="dash-main flex bg-violet-100 mx-[350px] h-[60vh] mt-12">
        <div className="left-dash bg-violet-200">
          <ul>
            <li
              className={`${
                selectedOption === "Profile" ? "bg-violet-400 text-white" : ""
              }  tracking-wider p-2 hover:text-violet-800`}
              onClick={() => setSelectedOption("Profile")}
            >
              Profile
            </li>
            <li
              className={`${
                selectedOption === "Experience"
                  ? "bg-violet-400 text-white"
                  : ""
              } tracking-wider p-2 hover:text-violet-800`}
              onClick={() => setSelectedOption("Experience")}
            >
              Experience
            </li>
            <li
              className={`${
                selectedOption === "Services" ? "bg-violet-400 text-white" : ""
              } tracking-wider p-2 hover:text-violet-800`}
              onClick={() => setSelectedOption("Services")}
            >
              Services
            </li>
            <li
              className={`${
                selectedOption === "Settings" ? "bg-violet-400 text-white" : ""
              } tracking-wider p-2 hover:text-violet-800`}
              onClick={() => setSelectedOption("Settings")}
            >
              Settings
            </li>
          </ul>
          <Link to="/">
            <button className="bottom-0 text-center mt-[31vh] bg-violet-300 p-1 px-5 ml-1 text-white hover:bg-violet-700">
              Logout
            </button>
          </Link>
        </div>
        <div className="right-dash">
          {selectedOption === "Profile" && <Profile />}
          {selectedOption === "Experience" && <Experience />}
          {selectedOption === "Services" && <Services />}
          {selectedOption === "Settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
