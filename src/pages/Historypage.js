import React from "react";
import { Link } from "react-router-dom";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Historypage = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
                <div className="basis-[1/4]">
                    <div className="bg-white rounded-md shadow-lg">
                        <h3 className="text-gray-500 px-8 py-4">INFO</h3>
                        <div className="flex flex-col justify-center items-center pb-3 border-b px-8">
                            <img className="w-32" src={require('../assets/images/profil.png')} alt="profil" />
                            <h2 className="font-bold">Jonas El Rodriguez</h2>
                            <p className="text-sm text-gray-400">Moviegoers</p>
                        </div>
                        <div className="px-8 my-5 pb-5">
                            <Link to='/' className="text-center bg-violet-800 py-2 px-10 rounded-md text-white">Logout</Link>
                        </div>
                    </div>
                </div>
                <div className="basis-3/4">
                    <div className="flex px-8 bg-white rounded-md w-full gap-5 mb-10">
                        <div className="py-5">
                            <Link to='/profil' className="text-gray-400">Account Settings</Link>
                        </div>
                        <div className="py-5 border-b-2 border-violet-800">
                            <Link to='/history' className="font-bold">Order History</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-md mb-7">
                        <div className="border-b">
                            <div className="p-8 flex items-center">
                                <div className="grow">
                                    <p className="text-sm text-gray-400">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <h3 className="text-lg font-bold">Spider-Man: Homecoming</h3>
                                </div>
                                <div>
                                    <img className="w-28" src={require('../assets/images/CineOne21.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-6 items-center">
                            <div className="grow">
                                <button className="bg-[#00BA88] py-2 px-10 rounded-md text-white">Ticket in active</button>
                            </div>
                            <Link to='/ticket-active' className="text-gray-400">See Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-md mb-7">
                        <div className="border-b">
                            <div className="p-8 flex items-center">
                                <div className="grow">
                                    <p className="text-sm text-gray-400">Monday, 14 June 2020 - 02:00pm</p>
                                    <h3 className="text-lg font-bold">Avengers: End Game</h3>
                                </div>
                                <div>
                                    <img className="w-28" src={require('../assets/images/ebv.id.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-6 items-center">
                            <div className="grow">
                                <button className="bg-[#6E7191] py-2 px-10 rounded-md text-white">Ticket used</button>
                            </div>
                            <Link to='/ticket-used' className="text-gray-400">See Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-md">
                        <div className="border-b">
                            <div className="p-8 flex items-center">
                                <div className="grow">
                                    <p className="text-sm text-gray-400">Monday, 10 March 2020 - 04:00pm</p>
                                    <h3 className="text-lg font-bold">Thor: Ragnarok</h3>
                                </div>
                                <div>
                                    <img className="w-28" src={require('../assets/images/ebv.id.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-6 items-center">
                            <div className="grow">
                                <button className="bg-[#6E7191] py-2 px-10 rounded-md text-white">Ticket expired</button>
                            </div>
                            <Link to='/ticket-expired' className="text-gray-400">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Historypage