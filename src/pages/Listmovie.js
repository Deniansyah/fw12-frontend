import React from "react";
import { Link } from "react-router-dom";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Listmovie = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="px-[130px] py-10 bg-gray-100">
                <div className="flex mb-5">
                    <div className="grow mb-5">
                        <h2 className="text-lg font-bold">List Movie</h2>
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
                <div>
                    <div className="flex gap-5 mb-[60px] overflow-x-auto pb-2">
                        <div className="bg-violet-800 text-white py-2 px-5 rounded-md border-2 border-violet-800">September</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">October</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">November</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Desember</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Januari</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Februari</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Maret</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">April</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Februari</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Maret</div>
                        <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">April</div>
                    </div>
                </div>
                <div className="bg-white mb-5 rounded-md p-12 flex flex-col gap-5">
                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
                            </div>
                        </div>
                        <div className="p-7 border-2 border-gray rounded-lg flex-none">
                            <img className="w-[135px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                            <div className="text-center">
                                <h2 className="text-lg font-bold">Spider-Man</h2>
                                <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                                <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex justify-center rounded-md border-2 border-violet-800 w-full">Details</Link>
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

export default Listmovie