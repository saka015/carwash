import React from "react";

import profile from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="p-3 flex">
      <img className="absolute" src={profile} width="150" alt="" />
      <div className="profile-details px-12 ml-36 ">
        <input
          disabled
          className="px-4 p-1 bg-violet-200  rounded-none"
          type="text"
          value="Balbir ji"
        />
        <input
          disabled
          className="px-4 p-1 bg-violet-200 my-1 rounded-none"
          type="email"
          value="balbirbalwan@gmail.com"
        />
        <input
          disabled
          className="px-4 p-1 bg-violet-200  my-1 rounded-none"
          type="text"
          value="IKGPTU Jalandhar"
        />
        <input
          disabled
          className="px-4 p-1 bg-violet-200  my-1 rounded-none"
          type="text"
          value="Lab Assistance"
        />
        <button className="mt-44 right-0 ml-60 bg-violet-400 px-4 p-1 text-white hover:text-violet-600">
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
