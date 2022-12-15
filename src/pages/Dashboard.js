import React from "react";
import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Dashboard = () => {
    return (
        <>
            <Navbarlogin></Navbarlogin>
            <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
                <div className="basis-3/4">
                    <h1 className="text-lg font-bold mb-4">Dashboard</h1>
                    <div className="bg-white p-5 rounded-md">
                        <img src={require("../assets/images/graph.png")} alt="grapik" />
                    </div>
                </div>
                <div className="basis-1/4">
                    <h1 className="text-lg font-bold mb-4">Filtered</h1>
                    <div className="flex flex-col bg-white rounded-md p-7 gap-3">
                        <div className="bg-[#FCFDFE] pr-3 rounded-md border-2">
                            <select className="bg-[#FCFDFE] py-2 px-2 w-full rounded-md focus:outline-none">
                                <option>Select Movie</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="bg-[#FCFDFE] pr-3 rounded-md border-2">
                            <select className="bg-[#FCFDFE] py-2 px-2 w-full rounded-md focus:outline-none">
                                <option>Select Premiere</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="bg-[#FCFDFE] pr-3 rounded-md border-2">
                            <select className="bg-[#FCFDFE] py-2 px-2 w-full rounded-md focus:outline-none">
                                <option>Select Location</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <button className="py-2 w-full border-2 border-violet-800 rounded-md bg-violet-800 text-white shadow-lg mt-5">Filter</button>
                        <button className="py-2 w-full border-2 border-violet-800 rounded-md text-violet-800 shadow-lg">Reset</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Dashboard
