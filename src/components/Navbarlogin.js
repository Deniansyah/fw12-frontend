import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const Navbarlogin = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar py-[15px] lg:px-[130px] md:px-5">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list-movie">List Movie</Link>
            </li>
            <div className="flex items-center rounded-md my-3 ml-3 md:hidden">
              <Icon.Search />
              <input
                className="outline-none pl-3"
                type="text"
                placeholder="Search Movie Name ..."
              />
            </div>
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
      <div className="flex justify-center items-center gap-5">
        <div className="group cursor-pointer lg:flex md:flex hidden items-center px-3 rounded-md py-1">
          <Icon.Search />
          <input
            className="py-1 px-3 hidden group-hover:block outline-none"
            type="text"
            placeholder="Search Movie Name ..."
          />
        </div>
        <div className="group relative cursor-pointer">
          <img
            className="w-[46px]"
            src={require("../assets/images/home-profil.png")}
            alt="profil foto"
          />
          <div className="hidden gap-1 py-3 px-5  w-28 rounded bg-white absolute right-0 top-14 shadow-lg group-hover:flex flex-col">
            <Link to="/profil">Profil</Link>
            <Link to="/sign-in" onClick={() => dispatch(logoutAction())}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarlogin;
