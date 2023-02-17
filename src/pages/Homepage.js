import React from "react";
import axios from "axios";
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
import Card from "../components/card";
import Card2 from "../components/card2";

const Homepage = () => {
    // nowshowing
    const [nowShowing, setNowShowing] = React.useState([])
    React.useEffect(() => {
        getNowShowing().then((data) => {
            setNowShowing(data.results)
        })

    }, [])

    const getNowShowing = async () => {
        const {data} = await axios.get(
            "http://localhost:8888/movies/now"
        )
        return data
    }

    // upcoming
    const [upcoming, setUpcoming] = React.useState([])
    React.useEffect(() => {
        getUpcoming().then((data) => {
            setUpcoming(data.results)
        })

    }, [])

    const getUpcoming = async () => {
        const {data} = await axios.get(
            "http://localhost:8888/movies/upcoming?month=10"
        )
        return data
    }

    return(
        <>
            <div id="navbar" className="mx-[130px]">
                <div className="flex items-center my-3">
                    <div className="flex items-center grow gap-5">
                        <div className="mr-12">
                            <img src={require('../assets/images/tickitz-small-purple.png')} alt="logo" />
                        </div>
                        <Link to='/'>Home</Link>
                        <Link to='/list-movie'>List Movie</Link>
                    </div>
                    <div>
                        <Link to='/sign-up' className="bg-violet-800 text-white rounded-md py-2 px-5">Sign Up</Link>
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
            <div id="now-showing" className="mt-5 bg-gray-100 px-[130px] py-[60px]">
                <div className="flex mb-[40px]">
                    <div className="grow">
                        <div className="flex flex-col w-fit gap-3 justify-center items-center">
                            <h1 className="text-violet-800 text-xl font-bold">Now Showing</h1>
                            <div className="border-b border-2 border-violet-800 w-[70%] rounded-lg"></div>
                        </div>
                    </div>
                    <Link to='/list-movie' className="text-violet-800">view all</Link>
                </div>
                <div className="flex gap-5 overflow-x-auto pb-2 items-start">
                    {nowShowing?.map((item) => {
                        return (
                            <Card data={item} />
                        )
                    })}
                    <div className="group p-6 border-2 border-white rounded-lg flex-none text-center hover:bg-white">
                        <img className="w-[130px]" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="hidden group-hover:block">
                            <h2 className="text-lg font-bold mt-2">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="upcoming" className="px-[130px] pt-[40px] mb-[100px]">
                <div className="flex mb-[40px]">
                    <div className="grow">
                        <h1 className="text-xl font-bold">Upcoming Movie</h1>
                    </div>
                    <Link to='/list-movie' className="text-violet-800">view all</Link>
                </div>
                <div className="flex gap-5 mb-[60px] overflow-x-auto pb-2">
                    <div className="bg-violet-800 text-white py-2 px-5 rounded-md border-2 border-violet-800">September</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">October</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">November</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Desember</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Januari</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Februari</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Maret</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">April</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Februari</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">Maret</div>
                    <div className="bg-white text-violet-800 py-2 px-5 rounded-md border-2 border-violet-800">April</div>
                </div>
                <div className="flex pb-2 gap-5 overflow-x-auto">
                    {upcoming?.map((item) => {
                        return (
                            <Card2 data={item} />
                        )
                    })}
                    <div className="p-7 border-2 border-gray rounded-lg flex-none">
                        <img className="w-[140px] pb-5" src={require('../assets/images/film1-big.png')} alt="film1" />
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Spider-Man</h2>
                            <p className="text-sm text-gray-400 pb-5">Action, Marvel, Sci-Fi</p>
                            <Link to='/movie-detail' className="bg-white text-violet-800 py-1 px-2 flex w-full justify-center rounded-md border-2 border-violet-800">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="subscribe" className="text-center mb-[180px] border-1 rounded-md mx-[130px] py-[40px] shadow-xl">
                <h3 className="text-xl text-gray-700">Be the vanguard of the</h3>
                <h1 className="text-5xl font-bold text-violet-800 mb-5">Moviegoers</h1>
                <div className="flex justify-center gap-5 mb-5">
                    <input className="border-2 p-2 rounded-md w-80" type="text" placeholder="Type your email"/>
                    <button className="bg-violet-800 text-white px-5 rounded-md text-sm">Join now</button>
                </div>
                <p className="text-sm text-gray-500">By joining you as a Tickitz member,<br/> we will always send you the latest updates via email .</p>
            </div>
            <div id="footer" className="px-[130px]">
                <div className="flex pb-[60px] gap-[80px]">
                    <div>
                        <img src={require('../assets/images/tickitz-small-purple.png')} alt="lgoo" />
                        <p className="text-gray-500 mt-4">Stop waiting in line. Buy<br/>tickets conveniently, watch movies quietly.</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold pb-5">Explore</h3>
                        <Link to='/' className="text-gray-500">Home</Link>
                        <Link to='/list-movie' className="text-gray-500">List Movie</Link>
                    </div>
                    <div>
                        <h3 className="font-bold pb-5">Our Sponsor</h3>
                        <img className="pb-5" src={require('../assets/images/ebv.id.png')} alt="ebv" />
                        <img className="pb-5" src={require('../assets/images/CineOne21.png')} alt="cn21" />
                        <img className="pb-5" src={require('../assets/images/hiflix.png')} alt="hiflix" />
                    </div>
                    <div>
                        <h3 className="font-bold pb-5">Follow Us</h3>
                        <div className="flex text-gray-500 gap-2">
                            <Icon.Facebook />
                            <p className="pb-5">Tickitz Cinema id</p>
                        </div>
                        <div className="flex text-gray-500 gap-2">
                            <Icon.Instagram />
                            <p className="pb-5">tickitz.id</p>
                        </div>
                        <div className="flex text-gray-500 gap-2">
                            <Icon.Twitter />
                            <p className="pb-5">tickitz.id</p>
                        </div>
                        <div className="flex text-gray-500 gap-2">
                            <Icon.Youtube />
                            <p className="pb-5">Tickitz Cinema id</p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-5 text-gray-500">© 2020 Tickitz. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Homepage