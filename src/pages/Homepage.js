import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbarlogin from "../components/Navbarlogin"
import Footer from "../components/Footer";

import { useSelector } from "react-redux";

import http from "../helpers/http";

const Homepage = () => {
  const token = useSelector((state) => state.auth.token)
  const [upcoming, setUpcoming] = useState([]);
  const [nowshowing, setNowshowing] = useState([]);

  useEffect(() => {
    getUpcoming();
    getNowshowing();
  }, [])

  const getUpcoming = async () => {
    try {
      const dataUpcoming = await http().get('/movies/upcoming')
      setUpcoming(dataUpcoming.data.results)
    } catch (error) {
      setUpcoming([])
    }
  }

  const getNowshowing = async () => {
    try {
      const dataNowshowing = await http().get('/movies/now')
      setNowshowing(dataNowshowing.data.results)
    } catch (error) {
      setNowshowing([])
    }
  }

  return (
    <>
      {!token ? <Navbar /> : <Navbarlogin />}
      <div id="head-home" className="lg:mx-[130px] md:mx-10">
        <div className="flex flex-col lg:flex-row md:flex-row items-center mt-5">
          <div className="lg:basis-1/2 md:basis-1/2">
            <p className="text-gray-400 text-lg">
              Nearest Cinema, Newest Movie,
            </p>
            <h1 className="text-violet-800 text-5xl font-bold">
              Find out now!
            </h1>
          </div>
          <div className="lg:basis-1/2 md:basis-1/2">
            <img
              src={require("../assets/images/header.png")}
              alt="headergrid"
            />
          </div>
        </div>
      </div>
      <div
        id="now-showing"
        className="mt-5 bg-gray-100 lg:px-[130px] md:px-10 px-5 py-[60px]"
      >
        <div className="flex mb-[40px]">
          <div className="grow">
            <div className="flex flex-col w-fit gap-3 justify-center items-center">
              <h1 className="text-violet-800 text-xl font-bold">Now Showing</h1>
              <div className="border-b border-2 border-violet-800 w-[70%] rounded-lg"></div>
            </div>
          </div>
          <Link to="/list-movie" className="text-violet-800">
            view all
          </Link>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 items-start">
          {nowshowing?.map((data) => (
            <div className="group p-6 border-2 border-white rounded-lg flex-none text-center hover:bg-white">
              <img className="w-[130px]" src={data.picture} alt="film1" />
              <div className="hidden group-hover:block">
                <h2 className="text-lg font-bold mt-2 w-[130px]">
                  {data.title}
                </h2>
                <p className="text-sm text-gray-400 pb-5 w-[130px]">
                  {data.genres}
                </p>
                <Link
                  to="/movie-detail"
                  className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="upcoming"
        className="lg:px-[130px] md:px-10 px-5 pt-[40px] lg:mb-[100px] md:mb-[50px] mb-20"
      >
        <div className="flex mb-[40px]">
          <div className="grow">
            <h1 className="text-xl font-bold">Upcoming Movie</h1>
          </div>
          <Link to="/list-movie" className="text-violet-800">
            view all
          </Link>
        </div>
        <div className="flex gap-5 mb-[60px] overflow-x-auto pb-2">
          <div className="bg-violet-800 text-white py-2 px-5 rounded-md border-2 border-violet-800">
            September
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            October
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            November
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Desember
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Januari
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Februari
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Maret
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            April
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Februari
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            Maret
          </div>
          <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">
            April
          </div>
        </div>
        <div className="flex pb-2 gap-5 overflow-x-auto">
          {upcoming?.map((data) => (
            <div className="p-7 border-2 border-gray rounded-lg flex-none">
              <img className="w-[130px] pb-5" src={data.picture} alt="film1" />
              <div className="text-center">
                <h2 className="text-lg font-bold w-[130px]">{data.title}</h2>
                <p className="text-sm text-gray-400 pb-5 w-[130px]">
                  {data.genres}
                </p>
                <Link
                  to="/movie-detail"
                  className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="subscribe"
        className="text-center lg:mb-[180px] md:mb-[90px] mb-20 border-1 rounded-md lg:mx-[130px] md:mx-10 mx-5 py-[40px] shadow-xl"
      >
        <h3 className="text-xl text-gray-700">Be the vanguard of the</h3>
        <h1 className="text-5xl font-bold text-violet-800 mb-5">Moviegoers</h1>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-5 mb-5 mx-10">
          <input
            className="border-2 p-2 rounded-md w-full lg:w-1/2 md:w-1/2"
            type="text"
            placeholder="Type your email"
          />
          <button className="bg-violet-800 btn btn-primary text-white px-5 rounded-md text-sm">
            Join now
          </button>
        </div>
        <p className="text-sm text-gray-500">
          By joining you as a Tickitz member,
          <br /> we will always send you the latest updates via email .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
