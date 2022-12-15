import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Manageschedule = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="px-[100px] py-10 bg-gray-100">
                <div className="mb-10">
                    <h1 className="text-lg font-bold mb-5">Form Schedule</h1>
                    <div className="bg-white rounded-md p-12">
                        <div className="flex gap-7 mb-14">
                            <div className="basis-[25%] border-2 rounded-md p-7">
                                <img src={require('../assets/images/film1-big.png')} alt="film1" />
                            </div>
                            <div className="basis-[37.5%] flex flex-col">
                                <label className="mb-3">Movie</label>
                                <div className="bg-[#FCFDFE] border-2 pr-3 rounded-md mb-3">
                                    <select className="bg-[#FCFDFE] w-full py-2 px-4 rounded-md focus:outline-none">
                                        <option>Select Movie</option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <label className="mb-3">Price</label>
                                <input className="text-sm bg-[#FCFDFE] py-2 px-5 rounded-md border-2 border-[#dedede] mb-3" type="text" placeholder="10" />
                                <label className="mb-3">Premiere</label>
                                <div className="flex items-center gap-5">
                                    <div>
                                        <img src={require('../assets/images/ebv.id.png')} alt="ebv" />
                                    </div>
                                    <div className="bg-white py-2 px-5 rounded-md shadow-lg w-40">
                                        <img src={require('../assets/images/hiflix.png')} alt="hiflix" />
                                    </div>
                                    <div>
                                        <img src={require('../assets/images/CineOne21.png')} alt="cineone21" />
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[37.5%] flex flex-col">
                                <label className="mb-3">Location</label>
                                <div className="bg-[#FCFDFE] border-2 pr-3 rounded-md mb-3">
                                    <select className="bg-[#FCFDFE] w-full py-2 px-4 rounded-md focus:outline-none">
                                        <option>Select Location</option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <div className="flex flex-col">
                                        <label className="mb-3">Date Start</label>
                                        <input className="text-sm bg-[#FCFDFE] py-2 px-2 rounded-md border-2 border-[#DEDEDE]" type="date" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-3">Date End</label>
                                        <input className="text-sm bg-[#FCFDFE] py-2 px-2 rounded-md border-2 border-[#DEDEDE]" type="date" />
                                    </div>
                                </div>
                                <label className="mb-3">Time</label>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-4 rounded-md border-2 border-violet-800 text-violet-800"><Icon.Plus /></button>
                                    <p className="text-gray-500">08:30am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:30pm</p>
                                    <p className="text-gray-500">09:30pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-5">
                            <button className="py-2 w-40 shadow-lg rounded-md border-violet-800 border-2 text-violet-800">Reset</button>
                            <button className="py-2 w-40 shadow-lg rounded-md border-violet-800 border-2 bg-violet-800 text-white">Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <div className="flex grow items-center">
                            <h2 className="text-lg font-bold">Data Schedule</h2>
                        </div>
                        <div className="flex h-[39px] gap-5">
                            <div className="bg-white pr-3 rounded-md">
                                <select className="py-2 px-4 rounded-md focus:outline-none">
                                    <option>Sort</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="bg-white pr-3 rounded-md">
                                <select className="py-2 px-4 rounded-md focus:outline-none">
                                    <option>Location</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="bg-white pr-3 rounded-md">
                                <select className="py-2 px-4 rounded-md focus:outline-none">
                                    <option>Movie</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mb-5 rounded-md p-5">
                        <div className="flex flex-wrap justify-center gap-5">
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg w-[18.6rem] flex-none border shadow-lg">
                                <div className="flex gap-5 border-b p-6">
                                    <div className="flex justify-center items-center">
                                        <img className="w-36" src={require('../assets/images/ebv.id.png')} alt="cinema ebv" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-medium">ebv.id</h2>
                                        <p className="text-gray-500 text-sm">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-wrap gap-2 text-sm">
                                    <p className="text-gray-500">08:03am</p>
                                    <p className="text-gray-500">10:30pm</p>
                                    <p className="text-gray-500">12:00pm</p>
                                    <p className="text-gray-500">02:00pm</p>
                                    <p className="text-gray-500">04:30pm</p>
                                    <p className="text-gray-500">07:00pm</p>
                                    <p className="text-gray-500">08:00pm</p>
                                </div>
                                <div className="px-6 pb-6 flex">
                                    <p className="text-lg text-gray-500 grow">Price</p>
                                    <h2 className="text-lg font-bold">$10.00/seat</h2>
                                </div>
                                <div className="flex justify-between px-6 pb-6 mb-2">
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-violet-800 rounded-md border-2 border-violet-800">Update</Link>
                                    <Link to='/order' className="py-1 flex w-28 justify-center text-red-500 rounded-md border-2 border-red-500">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-center">
                    <div className="bg-violet-800 text-white rounded-md py-1 px-3 shadow-lg"><p>1</p></div>
                    <div className="bg-white rounded-md py-1 px-3">2</div>
                    <div className="bg-white rounded-md py-1 px-3">3</div>
                    <div className="bg-white rounded-md py-1 px-3">4</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Manageschedule
