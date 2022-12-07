import React from "react";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Ticketused = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="px-[160px] py-10 bg-gray-100">
                <div className="bg-white py-8 px-14 rounded-md">
                    <h1 className="text-center font-bold mb-10">Proof of Payment</h1>
                    <div className="flex mb-10">
                        <div className="basis-[70%] relative">
                            <div className="w-16 h-16 bg-white rounded-full absolute -right-8 -top-8 z-10"></div>
                            <div className="border-r border-dashed h-72 absolute right-0 top-6"></div>
                            <div className="flex items-center bg-violet-800 py-2 px-14 rounded-tl-xl">
                                <div className="grow">
                                    <img src={require('../assets/images/Tickitz-2.png')} alt="logo" />
                                </div>
                                <p className="text-white">Admit One</p>
                            </div>
                            <div className="px-14 border-l rounded-bl-xl border-b border-r py-10 relative">
                                <div className="w-16 h-16 bg-white rounded-full absolute -right-8 -bottom-8 border-t"></div>
                                <div className="mb-5">
                                    <p className="text-gray-400 text-sm">Movie</p>
                                    <h1 className="font-bold">Spider-Man: Homecoming</h1>
                                </div>
                                <div className="grid grid-cols-3 gap-5">
                                    <div>
                                        <p className="text-gray-400 text-sm">Date</p>
                                        <h1 className="font-bold">07 July</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Time</p>
                                        <h1 className="font-bold">02:00pm</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Category</p>
                                        <h1 className="font-bold">Action</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Count</p>
                                        <h1 className="font-bold">3 pieces</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Seats</p>
                                        <h1 className="font-bold">C4, C5, C6</h1>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Price</p>
                                        <h1 className="text-2xl font-bold">$30.00</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-[30%] border-r border-b rounded-br-xl">
                            <div className="flex justify-center bg-violet-800 py-2 px-2 rounded-tr-xl">
                                <img src={require('../assets/images/Tickitz-2.png')} alt="logo" />
                            </div>
                            <div className="flex justify-center items-center h-[75%]">
                                <div className="bg-gray-200 font-bold w-44 h-44 flex justify-center items-center text-xl text-center">Ticket already used</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Ticketused