import React from "react";
import { Link } from "react-router-dom";

const Homewithsignin = () => {
    return (
        <>
            <div id="navbar" className="mx-[130px]">
                <div className="flex items-center my-3">
                    <div className="flex items-center grow gap-5">
                        <div className="mr-12">
                            <img src={require('../assets/images/tickitz-small-purple.png')} alt="logo" />
                        </div>
                        <Link to='/'>Home</Link>
                        <Link to='/'>List Movie</Link>
                    </div>
                    <div>
                        <img className="w-[46px]" src={require('../assets/images/home-profil.png')} alt="profil foto" />
                    </div>
                </div>
            </div>
            <div id="head-home" className="mx-[130px]">
                <div className="flex items-center mt-5">
                    <div className="basis-1/2">
                        <p className="text-gray-400 text-lg">Nearest Cinema, Newest Movie,</p>
                        <h1 className="text-violet-800 text-5xl font-bold">Find out now!</h1>
                    </div>
                    <div className="basis-1/2">
                        <img src={require('../assets/images/header.png')} alt="headergrid" />
                    </div>
                </div>
            </div>
            <div id="now-showing" className="mt-5 bg-gray-100 px-[130px] pt-[60px]">
                <div className="flex mb-[40px]">
                    <div className="grow">
                        <h1 className="text-violet-800 text-xl font-bold">Now Showing</h1>
                    </div>
                    <p className="text-violet-800">view all</p>
                </div>
                <div className="flex gap-5 pb-[60px]">
                    <div className="w-[200px] h-[245px] border-2 border-white rounded-lg flex justify-center items-center">
                        <img className="w-[120px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[245px] border-2 border-white rounded-lg flex justify-center items-center">
                        <img className="w-[120px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[245px] border-2 border-white rounded-lg flex justify-center items-center">
                        <img className="w-[120px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[245px] border-2 border-white rounded-lg flex justify-center items-center">
                        <img className="w-[120px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                    <div className="w-[200px] h-[245px] border-2 border-white rounded-lg flex justify-center items-center">
                        <img className="w-[120px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                    </div>
                </div>
            </div>
            <div id="upcoming" className="px-[130px] pt-[40px] mb-[100px]">
                <div className="flex mb-[40px]">
                    <div className="grow">
                        <h1 className="text-xl font-bold">Upcoming Movie</h1>
                    </div>
                    <p className="ext-violet-800">view all</p>
                </div>
                <div className="flex gap-5 mb-[60px]">
                    <div className="bg-violet-800 text-white py-2 px-5 rounded-md border-2 border-violet-800">September</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">October</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">November</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Desember</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Januari</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Februari</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Maret</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">April</div>
                </div>
                <div className="flex pb-[40px] gap-5">
                    <div className="w-[200px] h-[380px] border-2 border-gray rounded-lg flex flex-col justify-center items-center">
                        <img className="w-[120px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <button className="bg-white text-violet-800 py-1 px-5 rounded-md border-2 border-violet-800 w-[100%]">Details</button>
                        </div>
                    </div>
                    <div className="w-[200px] h-[380px] border-2 border-gray rounded-lg flex flex-col justify-center items-center">
                        <img className="w-[120px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <button className="bg-white text-violet-800 py-1 px-5 rounded-md border-2 border-violet-800 w-[100%]">Details</button>
                        </div>
                    </div>
                    <div className="w-[200px] h-[380px] border-2 border-gray rounded-lg flex flex-col justify-center items-center">
                        <img className="w-[120px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <button className="bg-white text-violet-800 py-1 px-5 rounded-md border-2 border-violet-800 w-[100%]">Details</button>
                        </div>
                    </div>
                    <div className="w-[200px] h-[380px] border-2 border-gray rounded-lg flex flex-col justify-center items-center">
                        <img className="w-[120px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <button className="bg-white text-violet-800 py-1 px-5 rounded-md border-2 border-violet-800 w-[100%]">Details</button>
                        </div>
                    </div>
                    <div className="w-[200px] h-[380px] border-2 border-gray rounded-lg flex flex-col justify-center items-center">
                        <img className="w-[120px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <button className="bg-white text-violet-800 py-1 px-5 rounded-md border-2 border-violet-800 w-[100%]">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-[200px] border-1 rounded-md mx-[130px] py-[40px] shadow-xl">
                <h3 className="text-xl text-gray-700">Be the vanguard of the</h3>
                <h1 className="text-5xl font-bold text-violet-800 mb-5">Moviegoers</h1>
                <div className="flex justify-center gap-5 mb-5">
                    <input className="border-2 p-2 rounded-md w-80" type="text" placeholder="Type your email"/>
                    <button className="bg-violet-800 text-white px-5 rounded-md text-sm">Join now</button>
                </div>
                <p className="text-sm text-gray-500">By joining you as a Tickitz member,<br/> we will always send you the latest updates via email .</p>
            </div>
            <div id="footer" className="px-[130px]">
                <div className="flex pb-[60px] gap-[90px]">
                    <div>
                        <img src={require('../assets/images/tickitz-small-purple.png')} alt="lgoo" />
                        <p className="text-gray-500 mt-4">Stop waiting in line. Buy<br/>tickets conveniently, watch movies quietly.</p>
                    </div>
                    <div>
                        <h3 className="font-bold pb-5">Explore</h3>
                        <p className="text-gray-500">Home</p>
                        <p className="text-gray-500">List Movie</p>
                    </div>
                    <div>
                        <h3 className="font-bold pb-5">Our Sponsor</h3>
                        <img className="pb-5" src={require('../assets/images/ebv.id.png')} alt="ebv" />
                        <img className="pb-5" src={require('../assets/images/CineOne21.png')} alt="cn21" />
                        <img className="pb-5" src={require('../assets/images/hiflix.png')} alt="hiflix" />
                    </div>
                    <div>
                        <h3 className="font-bold pb-5">Follow Us</h3>
                        <div className="text-gray-500 pb-5">Tickitz Cinema id</div>
                        <div className="text-gray-500 pb-5">tickitz.id</div>
                        <div className="text-gray-500 pb-5">tickitz.id</div>
                        <div className="text-gray-500 pb-5">Tickitz Cinema id</div>
                    </div>
                </div>
                <div className="text-center pb-5 text-gray-500">© 2020 Tickitz. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Homewithsignin