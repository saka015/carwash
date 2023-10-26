import React, { useState } from "react";

import { Link } from "react-router-dom";

let isAuth = false;

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    setIsAuth((prevState) => !prevState);
  };

  const login = () => {
    setIsAuth((prevState) => !prevState);
  };

  return (
    <div className="navbar bg-slate-600 p-2 pb-4">
      <Link to="/">
        <div className="left ml-4 mt-2 text-2xl text-black">LOGO</div>
      </Link>
      <div className="right flex gap-x-2">
        {/* Conditional Rendering */}

        {!isAuth ? (
          <div>
            <Link
              className="nav-link "
              aria-current="page"
              to="/dashboard"
              activeClassName="active"
            >
              <button className="nav-btns mt-2 mr-4 bg-violet-500 rounded-full">
                Dashboard
              </button>
            </Link>
            <Link
              className="nav-link "
              aria-current="page"
              to="/"
              activeClassName="active"
            >
              <button
                className="nav-btns mt-2 mr-4 bg-green-500 rounded-full"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="right flex gap-x-2">
            {" "}
            <ul className="flex gap-x-7 mr-12 text-sm mt-4 text-white font-semibold cursor-pointer">
              <Link
                className="nav-link "
                aria-current="page"
                to="/"
                activeClassName="active"
              >
                <li>HOME</li>
              </Link>

              <Link
                className="nav-link "
                aria-current="page"
                to="/contactus"
                activeClassName="active"
              >
                <li>CONTACT US</li>
              </Link>
              <Link className="nav-link " aria-current="page" to="/ourservices">
                <li> GET SERVICES</li>
              </Link>
            </ul>
            <Link
              className="nav-link "
              aria-current="page"
              to="/login"
              activeClassName="active"
            >
              <button className="nav-btns mt-2 mr-4 bg-violet-500 rounded-full">
                Join us
              </button>
            </Link>
            <button
              className="nav-btns mt-2 mr-4 bg-green-500 rounded-full"
              onClick={login}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
