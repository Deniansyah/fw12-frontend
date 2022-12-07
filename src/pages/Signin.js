import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    return(
        <div className="flex h-screen">
            <div className="basis-1/2 bg-[url('../images/background.png')]">
                <div className="bg-violet-900/80 h-screen">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <img className="w-96" src={require('../assets/images/tickitz-big.png')} alt="bg" />
                        <h1 className="text-4xl text-white">wait, watch, wow!</h1>
                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="p-20">
                    <h1 className="text-5xl font-bold pb-4">Sign In</h1>
                    <p className="text-slate-400 pb-5 text-lg">Sign in with your data that you entered during your registration</p>
                    <form>
                        <div className="flex flex-col py-5">
                            <label>Email</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="email" placeholder="Write your email" />
                            <label>Password</label>
                            <input className="p-3 my-2 rounded-lg border border-slate-400 mb-4" type="password" placeholder="Write your password" />
                            <Link to='/' className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center">Sign In</Link>
                        </div>
                    </form>
                    <div className="text-center gap-2">
                        <p>Forgot your password? <Link to='/Signin' className="text-purple-800 underline underline-offset-4">Reset now</Link></p>
                        <p>Don't have an account? <Link to='/Signin' className="text-purple-800 underline underline-offset-4">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin