import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Paymentpage = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
                <div className="basis-[70%]">
                    <h1 className="text-xl font-bold mb-3">Payment Info</h1>
                    <div className="flex flex-col bg-white p-7 rounded-md mb-10">
                        <div className="flex border-b pb-1 mb-3 items-center">
                            <p className="text-gray-600 grow py-2">Date & time</p>
                            <p className="font-bold">Tuesday, 07 July 2020 at 02:00</p>
                        </div>
                        <div className="flex border-b pb-1 mb-3 items-center">
                            <p className="text-gray-600 grow py-2">Movie title</p>
                            <p className="font-bold">Spider-Man: Homecoming</p>
                        </div>
                        <div className="flex border-b pb-1 mb-3 items-center">
                            <p className="text-gray-600 grow py-2">Cinema name</p>
                            <p className="font-bold">CineOne21 Cinema</p>
                        </div>
                        <div className="flex border-b pb-1 mb-3 items-center">
                            <p className="text-gray-600 grow py-2">Number of tickets</p>
                            <p className="font-bold">3 pieces</p>
                        </div>
                        <div className="flex pb-1 mb-3 items-center">
                            <p className="text-gray-600 grow py-2">Total payment</p>
                            <p className="font-bold">$30,00</p>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Choose a Payment Method</h1>
                    <div className="flex flex-col bg-white p-7 rounded-md mb-10">
                        <div className="flex flex-wrap justify-between my-5">
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/gpay.png')} alt="gpay" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/visa.png')} alt="visa" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/gopay.png')} alt="gopay" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/paypal.png')} alt="paypal" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/dana.png')} alt="dana" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/bca.png')} alt="bca" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/bri.png')} alt="bri" />
                                </div>
                            </div>
                            <div className="h-14 w-32 mb-2 border-2 rounded-md flex-none">
                                <div className="flex justify-center pt-2">
                                    <img src={require('../assets/images/ovo.png')} alt="ovo" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mb-5">
                                <div className="text-gray-400">_________________________________</div>
                                <p className="text-center bg-white w-20 text-gray-400">or</p>
                                <div className="text-gray-400">_________________________________</div>
                            </div>
                            <p className="text-center text-gray-500">Pay via cash. <span className="text-violet-800">See how it work</span></p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="grow">
                            <Link to='/order' className="border-2 border-violet-800 py-2 px-8 rounded-md text-violet-800">Prvious step</Link>
                        </div>
                        <div>
                            <Link to='/history' className="border-2 border-violet-800 py-2 px-8 rounded-md text-white bg-violet-800">Pay your order</Link>
                        </div>
                    </div>
                </div>
                <div className="basis-[40%]">
                    <h1 className="text-xl font-bold mb-3">Personal Info</h1>
                    <form>
                        <div className="flex flex-col bg-white py-7 px-5 rounded-md mb-10">
                            <label>Full Name</label>
                            <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your full name" />
                            <label>Email</label>
                            <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your email" />
                            <label>Phone Number</label>
                            <input className="p-2 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your phone number" />
                            <div className="flex gap-5 bg-[#F4B7404D] py-3 px-5 rounded-md">
                                <Icon.AlertTriangle className="text-yellow-500" />
                                <p>Fill your data correctly.</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Paymentpage