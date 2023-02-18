import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const Navbarlogin = () => {
  const dispatch = useDispatch();
  return (
    <div className="mx-[130px]">
      <div className="flex items-center my-3">
        <div className="flex items-center grow gap-5">
          <div className="mr-12">
            <img
              src={require("../assets/images/tickitz-small-purple.png")}
              alt="logo"
            />
          </div>
          <Link to="/home">Home</Link>
          <Link to="/list-movie">List Movie</Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="group cursor-pointer flex items-center px-3 rounded-md py-1">
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
            <div className="hidden flex flex-col gap-1 py-3 px-5  w-28 rounded bg-white absolute right-0 top-14 shadow-lg group-hover:flex">
              <Link to="/profil">Profil</Link>
              <Link to="/sign-in" onClick={() => dispatch(logoutAction())}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarlogin;
