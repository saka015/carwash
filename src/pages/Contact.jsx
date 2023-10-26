import React from 'react'

import contactsvg from '../assets/contactsvg.svg'

const contact = () => {
  return (
    <div className="h-[100vh] flex">
      <img className="-mt-32 ml-16" src={contactsvg} width="600" alt="" />
      <div className="contact-form p-3">
        <input
          className="bg-violet-100 p-3 mt-2 rounded-none w-full"
          type="email"
          placeholder="Enter email"
        />
        <br />
        <textarea
          className="bg-violet-100 p-3 my-4 focus:outline-none"
          name=""
          id=""
          cols="45"
          rows="8"
          placeholder="Type your message..."
        ></textarea>
        <button className="text-center bg-violet-400 w-full p-2 text-white hover:bg-violet-500 focus:outline-none">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default contact
