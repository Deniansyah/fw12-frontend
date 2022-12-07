import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Resetpassword = () => {
    return(
        <div className="flex h-screen">
            <div className="basis-1/2 bg-[url('../images/background.png')]">
                <div className="bg-violet-900/80 h-screen">
                    <div className="flex flex-col pl-14 py-10 h-screen">
                        <img className="w-64 mb-10" src={require('../assets/images/tickitz-big.png')} alt="bg" />
                        <h1 className="text-4xl text-white mb-7">Lets reset your password</h1>
                        <p className="text-gray-300 text-lg mb-8">To be able to use your account again, please<br/>complete the following steps.</p>
                        <div className="flex gap-5">
                            <div className="w-14 flex flex-col gap-6">
                                <div className="flex justify-center items-center font-bold text-violet-800 border-2 border-white bg-white rounded-full py-3.5 px4">1</div>
                                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4">2</div>
                                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4">3</div>
                                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4">4</div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="text-white text-lg py-3.5">Fill your complete email</div>
                                <div className="text-gray-300 text-lg py-3.5">Check your email</div>
                                <div className="text-gray-300 text-lg py-3.5">Enter your new password</div>
                                <div className="text-gray-300 text-lg py-3.5">Done</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 overflow-y-auto">
                <div className="p-20">
                    <h1 className="text-2xl font-bold pb-4">Fill your complete password</h1>
                    <p className="text-slate-400 pb-5 text-lg">set your new password</p>
                    <form>
                        <div className="flex flex-col py-5">
                            <label>Password</label>
                            <div className="relative">
                                <Icon.Eye className="absolute right-5 top-5 text-gray-400"/>
                                <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]" type="password" placeholder="Write your password" />
                            </div>
                            <label>Confirm Password</label>
                            <div className="relative">
                                <Icon.Eye className="absolute right-5 top-5 text-gray-400"/>
                                <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]" type="password" placeholder="Write your confirm password" />
                            </div>
                            <Link to='/sign-in' className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center">Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword