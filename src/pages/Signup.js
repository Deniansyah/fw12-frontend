import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <div className="flex h-screen">
            <div className="md:basis-1/2 bg-[url('../images/background.png')] hidden md:block">
                <div className="bg-violet-900/80 h-screen">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <img className="w-96" src={require('../assets/images/tickitz-big.png')} alt="bg" />
                        <h1 className="text-4xl text-white">wait, watch, wow!</h1>
                    </div>
                </div>
            </div>
            <div className="md:basis-1/2 overflow-y-auto w-full">
                <div className="p-20">
                    <h1 className="text-5xl font-bold pb-4">Sign Up</h1>
                    <p className="text-slate-400 pb-5 text-lg">Fill your additional details</p>
                    <form>
                        <div className="flex flex-col py-5">
                            <label>First Name</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your first name" />
                            <label>Last Name</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your last name" />
                            <label>Phone Number</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your phone number" />
                            <label>Email</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your email" />
                            <label>Password</label>
                            <div className="relative">
                                <Icon.Eye className="absolute right-5 top-5 text-gray-400"/>
                                <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]" type="password" placeholder="Write your password" />
                            </div>
                            <Link to='/sign-in' className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center">Sign Up</Link>
                        </div>
                    </form>
                    <div className="text-center gap-2">
                        <p>Don't have an account? <Link to='/sign-in' className="text-purple-800 underline underline-offset-4">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup