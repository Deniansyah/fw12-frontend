import React from "react";
import { Link } from "react-router-dom";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Managemovie = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="px-[130px] py-10 bg-gray-100">
                <div className="mb-10">
                    <h1 className="text-lg font-bold mb-5">Form Movie</h1>
                    <div className="bg-white rounded-md p-12">
                        <div className="flex gap-5 mb-5">
                            <div className="border-2 rounded-md p-7">
                                <img src={require('../assets/images/film1-big.png')} alt="film1" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-3">Movie Name</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 w-72 rounded-md border-2 border-[#dedede] mb-5" type="text" placeholder="Spider-Man: Homecoming" />
                                <label className="mb-3">Director</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 w-72 rounded-md border-2 border-[#dedede] mb-5" type="text" placeholder="Jon Watts" />
                                <label className="mb-3">Release Date</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 w-72 rounded-md border-2 border-[#dedede]" type="text" placeholder="07/05/2020" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-3">Catagory</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 w-80 rounded-md border-2 border-[#dedede] mb-5" type="text" placeholder="Action, Adventure, Sci-Fi" />
                                <label className="mb-3">Casts</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 w-80 rounded-md border-2 border-[#dedede] mb-5" type="text" placeholder="Tom Holland, Michael Keaton, Robert Dow.." />
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <label className="mb-3">Duration Hour</label>
                                        <input className="text-sm w-36 bg-[#FCFDFE] py-2 px-2 rounded-md border-2 border-[#DEDEDE]" placeholder="13" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-3">Duration Hour</label>
                                        <input className="text-sm w-36 bg-[#FCFDFE] py-2 px-2 rounded-md border-2 border-[#DEDEDE]" placeholder="13" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">Synopsis</p>
                            <div className="p-5 bg-[#FCFDFE] border-2 rounded-md mt-3 mb-8">
                                <p className="text-[#4E4B66]">Thrilled by his experience with the Avengers, Peter returns home, where he<br/> lives with his Aunt May,</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-5">
                            <button className="py-2 w-48 shadow-lg rounded-md border-violet-800 border-2 text-violet-800">Reset</button>
                            <button className="py-2 w-48 shadow-lg rounded-md border-violet-800 border-2 bg-violet-800 text-white">Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <div className="flex grow items-center">
                            <h2 className="text-lg font-bold">Data Movie</h2>
                        </div>
                        <div className="flex h-[39px]">
                            <div className="bg-white pr-3 rounded-md">
                                <select className="py-2 px-4 rounded-md">
                                    <option>Sort</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="ml-5">
                                <input className=" py-2 px-4 rounded-md" type="text" placeholder="Search Movie Name ..."/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mb-5 rounded-md p-12 flex flex-col gap-5">
                        <div className="flex flex-wrap justify-center gap-5">
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-7 border-2 border-gray rounded-lg flex-none">
                                <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">Spider-Man</h2>
                                    <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                    <div className="flex flex-col gap-2">
                                        <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-10 rounded-md border-2 border-violet-800">Update</Link>
                                        <Link to='/movie-detail' className="bg-white text-red-500 py-1 px-10 rounded-md border-2 border-red-500">Delete</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-center">
                    <div className="bg-violet-800 text-white rounded-md py-1 px-3 shadow-lg">1</div>
                    <div className="bg-white rounded-md py-1 px-3">2</div>
                    <div className="bg-white rounded-md py-1 px-3">3</div>
                    <div className="bg-white rounded-md py-1 px-3">4</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Managemovie
