import React from "react";
import { Link } from "react-router-dom";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Orderpage = () => {
  return (
    <>
      <Navbarlogin></Navbarlogin>
      <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
        <div className="basis-[70%]">
          <h1 className="text-xl font-bold mb-3">Movie Selected</h1>
          <div className="flex justify-center items-center bg-white p-7 rounded-md mb-10">
            <h1 className="grow text-xl font-bold">Spider-Man: Homecoming</h1>
            <Link to='/list-movie' className="bg-[#EFF0F6] py-2 px-5 text-violet-800 font-bold rounded-md">Change movie</Link>
          </div>
          <h1 className="text-xl font-bold mb-3">Choose Your Seat</h1>
          <div className="flex flex-col bg-white p-7 rounded-md mb-10">
            <div>
              <div className="mb-5 flex flex-col justify-center items-center">
                <p className="text-center mb-1">Screen</p>
                <div className="border-[#D6D8E7] border-2 rounded-md w-[81%]"></div>
              </div>
              <div className="flex gap-5 justify-center">
                <div className="grid grid-cols-8 gap-1">
                  <div className="text-center">A</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">B</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">C</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-violet-800 rounded-md"></div>
                  <div className="w-6 h-6 bg-violet-800 rounded-md"></div>
                  <div className="w-6 h-6 bg-violet-800 rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">D</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">E</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">F</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">G</div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div></div>
                  <div className="text-center">1</div>
                  <div className="text-center">2</div>
                  <div className="text-center">3</div>
                  <div className="text-center">4</div>
                  <div className="text-center">5</div>
                  <div className="text-center">6</div>
                  <div className="text-center">7</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <div className="text-center">8</div>
                  <div className="text-center">9</div>
                  <div className="text-center">10</div>
                  <div className="text-center">11</div>
                  <div className="text-center">12</div>
                  <div className="text-center">13</div>
                  <div className="text-center">14</div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <h1 className="mb-3 font-bold">Seating key</h1>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#D6D8E7] rounded-md"></div>
                  <p>Available</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-violet-800 rounded-md"></div>
                  <p>Selected</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#6E7191] rounded-md"></div>
                  <p>Sold</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="grow">
              <Link to='/list-movie' className="border-2 border-violet-800 py-2 px-2 w-56 flex justify-center rounded-md text-violet-800">Change your movie</Link>
            </div>
            <div>
              <Link to='/payment' className="border-2 border-violet-800 py-2 px-2 w-56 flex justify-center rounded-md text-white bg-violet-800">Checkout now</Link>
            </div>
          </div>
        </div>
        <div className="basis-[40%]">
          <h1 className="text-xl font-bold mb-3">Order Info</h1>
          <div className="flex flex-col justify-center items-center bg-white py-7 rounded-md mb-10">
            <img className="w-32" src={require("../assets/images/CineOne21.png")} alt="" />
            <h1 className="font-bold mb-3">CineOne21 Cinema</h1>
            <div className="flex text-sm pb-4 border-b">
              <div className="gap-3 flex flex-col text-gray-400">
                <div>Movie selected</div>
                <div>Tuesday, 07 July 2020</div>
                <div>One ticket price</div>
                <div>Seat choosed</div>
              </div>
              <div className="text-right gap-3 flex flex-col">
                <div>Spider-Man: Homecoming</div>
                <div>02:00</div>
                <div>$10</div>
                <div>C4, C5, C6</div>
              </div>
            </div>
            <div className="flex w-full pt-4 px-5">
              <h2 className="grow font-bold">Total Payment</h2>
              <h2 className="text-violet-800 font-bold">$30</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Orderpage;
