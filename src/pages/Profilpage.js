import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Profilpage = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
                <div className="basis-[1/4]">
                    <div className="bg-white rounded-md shadow-lg">
                        <h3 className="text-gray-500 px-8 py-4">INFO</h3>
                        <div className="flex flex-col justify-center items-center pb-3 mb-4 border-b px-8">
                            <img className="w-32" src={require('../assets/images/profil.png')} alt="profil" />
                            <h2 className="font-bold">Jonas El Rodriguez</h2>
                            <p>Moviegoers</p>
                        </div>
                        <div className="px-10 pb-4">
                            <Link to='/' className="text-center bg-violet-800 py-2 px-10 rounded-md text-white">Logout</Link>
                        </div>
                    </div>
                </div>
                <div className="basis-3/4">
                    <div className="flex px-8 bg-white rounded-md w-full gap-5 mb-10">
                        <div className="py-5 border-b-2 border-violet-800">
                            <Link to='/profil' className="font-bold">Account Settings</Link>
                        </div>
                        <div className="py-5">
                            <Link to='/history' className="text-gray-400">Order History</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-md p-8 mb-5">
                        <div className="border-b pb-3 mb-7">
                            <p className="font-bold">Details Information</p>
                        </div>
                        <form>
                            <div className="flex gap-5">
                                <div className="basis-1/2 flex flex-col">
                                    <label>First Name</label>
                                    <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your first name" />
                                </div>
                                <div className="basis-1/2 flex flex-col">
                                    <label>Last Name</label>
                                    <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your last name" />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="basis-1/2 flex flex-col">
                                    <label>Email</label>
                                    <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your email" />
                                </div>
                                <div className="basis-1/2 flex flex-col">
                                    <label>Phone Number</label>
                                    <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your phone number" />                                                                           
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="bg-violet-800 text-white py-2 px-14 rounded-md mb-5">Update changes</button>
                    <div className="bg-white rounded-md p-8 mb-5">
                        <div className="border-b pb-3 mb-7">
                            <p className="font-bold">Account and Privacy</p>
                        </div>
                        <form>
                            <div className="flex gap-5">
                                <div className="basis-1/2 flex flex-col">
                                    <label>Password</label>
                                    <div className="relative">
                                        <Icon.Eye className="absolute right-4 top-4 text-gray-400"/>
                                        <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]" type="password" placeholder="Write your password" />
                                    </div>
                                </div>
                                <div className="basis-1/2 flex flex-col">
                                    <label>Confirm Password</label>
                                    <div className="relative">
                                        <Icon.Eye className="absolute right-4 top-4 text-gray-400"/>
                                        <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]" type="password" placeholder="Write your confirm password" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="bg-violet-800 text-white py-2 px-14 rounded-md">Update changes</button>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Profilpage