import React from "react";
import { Link } from "react-router-dom";

const Listmovie = () => {
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
                </div>
                <div className="bg-white mb-5 rounded-md p-12 flex flex-col gap-5">
                    <div className="flex gap-5">
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
                    <div className="flex gap-5">
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
                <div className="flex gap-5 justify-center">
                    <div className="bg-violet-800 text-white rounded-md py-1 px-3">1</div>
                    <div className="bg-white rounded-md py-1 px-3">2</div>
                    <div className="bg-white rounded-md py-1 px-3">3</div>
                    <div className="bg-white rounded-md py-1 px-3">4</div>
                </div>
            </div>
            <div id="footer" className="px-[130px] pt-16">
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

export default Listmovie