import React from 'react'

const Footer = () => {
    return (
      <div className='bg-violet-100'>
        <div className="footer flex space-around py-12">
          <h1 className="text-4xl font-semibold">LOGO</h1>
          <ul>
            <h2 className="text-2xl font-semibold">Services</h2>
            <li>Curbside Express</li>
            <li>Curbside Special</li>
            <li>Curbside Premium</li>
            <li>All Services & Deals</li>
          </ul>
          <ul>
            <h2 className="text-2xl font-semibold">Business Hours</h2>
            <li>Mon-Sat:By Appointment</li>
            <li>Sun:Closed</li>
          </ul>
          <ul>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <li>Phone:957-527-2220</li>
            <li>Email:info@carwash.com</li>
          </ul>
        </div>
        <div className="line w-full bg-slate-700 h-[0.01cm]"></div>
        <h3 className='text-center py-3 text-sm'>Carwash 2023 All Privacy Rights.</h3>
      </div>
    );
}

export default Footer