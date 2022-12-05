import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        <div className="mx-[130px]">
            <div className="flex items-center my-3">
                <div className="flex items-center grow gap-5">
                    <div className="mr-12">
                        <img src={require('../assets/images/tickitz-small-purple.png')} alt="logo" />
                    </div>
                    <Link to='/'>Home</Link>
                    <Link to='/'>List Movie</Link>
                </div>
                <div>
                    <Link to='/Signin' className="bg-violet-800 text-white rounded-md py-2 px-5">Sign Up</Link>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <div className="basis-1/2">
                    <p className="text-gray-400 text-lg">Nearest Cinema, Newest Movie,</p>
                    <h1 className="text-violet-800 text-5xl font-bold">Find out now!</h1>
                </div>
                <div className="basis-1/2">
                    <img src={require('../assets/images/header.png')} alt="headergrid" />
                </div>
            </div>
            <div className="mt-5">
                <div className="flex mb-[40px]">
                    <div className="grow">
                        <h1 className="text-violet-800 text-xl font-bold">Now Showing</h1>
                    </div>
                    <p className="text-violet-800">view all</p>
                </div>
                <div className="flex gap-5">
                    <div className="w-[200px] h-[280px] border-2 rounded-lg flex justify-center items-center">
                        <img className="w-[150px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[280px] border-2 rounded-lg flex justify-center items-center">
                        <img className="w-[150px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[280px] border-2 rounded-lg flex justify-center items-center">
                        <img className="w-[150px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[280px] border-2 rounded-lg flex justify-center items-center">
                        <img className="w-[150px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[280px] border-2 rounded-lg flex justify-center items-center">
                        <img className="w-[150px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage