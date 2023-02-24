import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:mx-[130px] mx-5 pt-10">
      <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col lg:pb-[60px] pb-10 lg:gap-[80px] gap-10">
        <div>
          <img
            src={require("../assets/images/tickitz-small-purple.png")}
            alt="lgoo"
          />
          <p className="text-gray-500 mt-4">
            Stop waiting in line. Buy
            <br />
            tickets conveniently, watch movies quietly.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold pb-5">Explore</h3>
          <Link to="/home" className="text-gray-500">
            Home
          </Link>
          <Link to="/list-movie" className="text-gray-500">
            List Movie
          </Link>
        </div>
        <div>
          <h3 className="font-bold pb-5">Our Sponsor</h3>
          <img
            className="pb-5"
            src={require("../assets/images/ebv.id.png")}
            alt="ebv"
          />
          <img
            className="pb-5"
            src={require("../assets/images/CineOne21.png")}
            alt="cn21"
          />
          <img
            className="pb-5"
            src={require("../assets/images/hiflix.png")}
            alt="hiflix"
          />
        </div>
        <div>
          <h3 className="font-bold pb-5">Follow Us</h3>
          <div className="flex text-gray-500 gap-2">
            <Icon.Facebook />
            <p className="pb-5">Tickitz Cinema id</p>
          </div>
          <div className="flex text-gray-500 gap-2">
            <Icon.Instagram />
            <p className="pb-5">tickitz.id</p>
          </div>
          <div className="flex text-gray-500 gap-2">
            <Icon.Twitter />
            <p className="pb-5">tickitz.id</p>
          </div>
          <div className="flex text-gray-500 gap-2">
            <Icon.Youtube />
            <p className="pb-5">Tickitz Cinema id</p>
          </div>
        </div>
      </div>
      <div className="text-center pb-5 text-gray-500">
        © 2020 Tickitz. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
