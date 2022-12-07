import React from "react";
import { Link } from "react-router-dom";

const Moviedetail = () => {
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
            <div className="flex mx-[130px] gap-7 my-10">
                <div className="basis-2/5">
                    <div className="border-2 flex justify-center items-center py-10 rounded-md">
                        <img src={require('../assets/images/film1-big.png')} alt="movie" />
                    </div>
                </div>
                <div className="basis-3/5">
                    <div className="flex flex-col">
                        <div className="mb-7">
                            <h1 className="text-2xl font-bold pb-1">Spider-Man: Homecoming</h1>
                            <p className="text-gray-500">Adventure, Action, Sci-Fi</p>
                        </div>
                        <div className="flex gap-7 pb-5 border-b ">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="text-gray-500">Release date</p>
                                    <h3>June 28, 2017</h3>
                                </div>
                                <div>
                                    <p className="text-gray-500">Duration</p>
                                    <h3>2 hours 13 minutes</h3>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="text-gray-500">Directed by</p>
                                    <h3>Jhon Watss</h3>
                                </div>
                                <div>
                                    <p className="text-gray-500">Cast</p>
                                    <h3>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-bold mb-4">Synopsis</h3>
                        <p className="text-gray-600">Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p>
                    </div>
                </div>
            </div>
            <div className="px-[130px] py-10 bg-gray-100">
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-5">Showtimes and Tickets</h2>
                    <div className="flex justify-center gap-5">
                        <input className="py-2 px-7 rounded-md bg-gray-300" type="date" />
                        <div className="bg-gray-300 pr-7 rounded-md">
                            <select className="py-2 px-7 rounded-md bg-gray-300">
                                <option>Purwokerto</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
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

export default Moviedetail