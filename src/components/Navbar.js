import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar" className="mx-[130px]">
      <div className="flex items-center my-3">
        <div className="flex items-center grow gap-5">
          <div className="mr-12">
            <img
              src={require("../assets/images/tickitz-small-purple.png")}
              alt="logo"
            />
          </div>
          <Link to="/">Home</Link>
          <Link to="/list-movie">List Movie</Link>
        </div>
        <div>
          <Link
            to="/sign-up"
            className="bg-violet-800 text-white rounded-md py-2 px-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
