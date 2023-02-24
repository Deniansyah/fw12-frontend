import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar py-[15px] lg:px-[130px] md:px-5">
      <div className="flex-1">
        <div className="lg:hidden dropdown mr-[20px]">
          <div tabIndex={0} className="flex-none lg:hidden">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list-movie">List Movie</Link>
            </li>
            <Link
              to="/sign-in"
              className="btn btn-sm btn-outline btn-primary rounded-md font-bold capitalize my-3 md:hidden"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="btn btn-sm btn-primary rounded-md capitalize mt-2 mb-3 md:hidden"
            >
              Sign Up
            </Link>
          </ul>
        </div>
        <img
          src={require("../assets/images/tickitz-small-purple.png")}
          alt="logo-app"
        />
        <div className="hidden  ml-20 lg:flex gap-10 justify-center">
          <Link to="/">Home</Link>
          <Link to="/list-movie">List Movie</Link>
        </div>
      </div>
      <div className="gap-2 hidden md:flex lg:flex">
        <Link
          to="/sign-in"
          className="btn btn-outline btn-primary rounded-md font-bold capitalize"
        >
          Login
        </Link>
        <Link to="/sign-up" className="btn btn-primary rounded-md capitalize">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
