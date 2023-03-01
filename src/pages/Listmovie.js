import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbarlogin from "../components/Navbarlogin";
import * as Icon from "react-feather";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import http from "../helpers/http";

const Listmovie = () => {
  const [movie, setMovie] = useState([]);
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [sortBy] = useState("title");
  const [search, setSearch] = React.useState("");

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sort, search]);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const searching = (e) => {
    setSearch(e);
  };

  const getMovie = async () => {
    try {
      const response = await http().get(
        `/movies?limit=${limit}&page=${page}&sort=${sort}&search=${search}&sortBy=${sortBy}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      setMovie(response.data.results);
    } catch (error) {
      setMovie([]);
    }
  };

  const sortLetter = (value) => {
    if (value === "ASC") {
      setSort("ASC");
    } else {
      setSort("DESC");
    }
  };

  return (
    <>
      {!token ? <Navbar /> : <Navbarlogin />}
      <div className="lg:px-[130px] md:px-10 py-10 bg-gray-100">
        <div className="flex flex-col lg:flex-row md:flex-row mb-5 px-5">
          <div className="grow mb-5">
            <h2 className="text-lg font-bold">List Movie</h2>
          </div>
          <div className="flex h-[39px]">
            <div className="bg-white pr-3 rounded-md">
              <select
                className="py-2 px-4 rounded-md focus:outline-none"
                onClick={(e) => sortLetter(e.target.value)}
              >
                <option className="hidden">Sort</option>
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
              </select>
            </div>
            <div className="ml-5">
              <input
                className=" py-2 px-4 rounded-md"
                type="text"
                placeholder="Search Movie Name ..."
                onChange={(e) => searching(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 lg:mb-[20px] md:mb-[20px] mb-[10px] overflow-x-auto pb-2 px-5">
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
        <div className="bg-white mb-5 rounded-md lg:py-12 md:py-8 py-7 flex flex-col gap-5">
          <div className="flex flex-wrap justify-center gap-5">
            {movie?.map((data) => (
              <div className="p-7 border-2 border-gray rounded-lg flex-none">
                <img
                  className="w-[110px] lg:w-[135px] md:w-[135px] pb-5"
                  src={data.picture}
                  alt="film1"
                />
                <div className="text-center">
                  <h2 className="text-lg font-bold w-[110px] lg:w-[135px] md:w-[135px]">
                    {data.title}
                  </h2>
                  <p className="text-sm text-gray-400 pb-5 w-[110px] lg:w-[135px] md:w-[135px]">
                    {data.genres}
                  </p>
                  <Link
                    to={"/detail/" + data.id}
                    className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex gap-5 justify-center">
          <div className="bg-violet-800 text-white rounded-md py-1 px-3 shadow-lg">
            1
          </div>
          <div className="bg-white rounded-md py-1 px-3">2</div>
          <div className="bg-white rounded-md py-1 px-3">3</div>
          <div className="bg-white rounded-md py-1 px-3">4</div>
        </div> */}
        <div className="flex items-center justify-center">
          <button
            disabled={page === 1}
            className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold bg-warning-conten hover:opacity-50 mr-[10px]"
            onClick={handlePrev}
          >
            <Icon.ArrowLeft />
          </button>
          <button
            className="w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold bg-warning-conten hover:opacity-50 mr-[10px]"
            onClick={handleNext}
          >
            <Icon.ArrowRight />
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Listmovie;
