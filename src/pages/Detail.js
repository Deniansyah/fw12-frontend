import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";
import moment from "moment"
import { useSelector } from "react-redux";
import http from "../helpers/http";

function Detail() {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getDetailMovie();
  })


  const getDetailMovie = async () => {
    try {
      const response = await http().get(`/movies/detail/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setMovie(response.data.results);
    } catch (error) {
      setMovie()
    }
  }

  const releaseDate = movie.releaseDate
  const newReleaseDate = moment(releaseDate).format("MMMM DD, YYYY")

  const duration = `"2023-07-30 ${movie.duration}"`
  const newDuration = moment.utc(duration).format("H [hours] m [minutes]")

  return (
    <>
      {!token ? <Navbar /> : <Navbarlogin />}
      <div className="flex flex-col lg:flex-row md:flex-row lg:mx-[130px] md:mx-10 mx-5 gap-10 my-16">
        <div className="lg:basis-[40%] md:basis-[40%]">
          <div className="flex justify-center items-center">
            <img src={movie.picture} alt="movie" />
          </div>
        </div>
        <div className="lg:basis-[70%] md:basis-[70%]">
          <div className="flex flex-col">
            <div className="mb-7">
              <h1 className="text-2xl font-bold pb-1">
                {movie.title}
              </h1>
              <p className="text-gray-500">{movie.genres}</p>
            </div>
            <div className="flex gap-10 pb-5 border-b ">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-gray-500">Release date</p>
                  <h3>{newReleaseDate}</h3>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <h3>{newDuration}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-gray-500">Directed by</p>
                  <h3>{movie.director}</h3>
                </div>
                <div>
                  <p className="text-gray-500">Cast</p>
                  <h3>{movie.casts}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-4">Synopsis</h3>
            <p className="text-gray-600">
              {movie.synopsis}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-[130px] md:px-10 px-5 py-10 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-lg font-bold mb-5">Showtimes and Tickets</h2>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-5 items-center">
            <input
              className="py-2 px-7 w-56 rounded-md bg-gray-200 focus:outline-none"
              type="date"
            />
            <div className="bg-gray-200 pr-5 rounded-md">
              <select className="py-2 px-7 w-56 rounded-md bg-gray-200 focus:outline-none">
                <option>Purwokerto</option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          <div className="bg-white rounded-lg w-[18.6rem] flex-none">
            <div className="flex gap-5 border-b p-6">
              <div className="flex justify-center items-center">
                <img
                  className="w-32"
                  src={require("../assets/images/ebv.id.png")}
                  alt="cinema ebv"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium">ebv.id</h2>
                <p className="text-gray-500 text-sm">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-wrap gap-3 text-sm">
              <p className="text-gray-500">08:03am</p>
              <p className="text-gray-500">10:30pm</p>
              <p className="text-gray-500">12:00pm</p>
              <p className="text-gray-500">02:00pm</p>
              <p className="text-gray-500">04:30pm</p>
              <p className="text-gray-500">07:00pm</p>
              <p className="text-gray-500">08:00pm</p>
            </div>
            <div className="p-6 flex">
              <p className="text-lg text-gray-500 grow">Price</p>
              <h2 className="text-lg font-bold">$10.00/seat</h2>
            </div>
            <div className="p-6 text-center mb-2">
              <Link
                to="/order"
                className="bg-violet-800 py-3 px-3 w-full flex justify-center text-white rounded-md"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">
            <p className="text-center bg-gray-100 w-40 text-violet-800">
              view all
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Detail;
