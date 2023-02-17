import React from "react";
import http from "../helpers/http";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const navigate = useNavigate();

  const forgotRequest = async (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const form = new URLSearchParams({
      email,
    });
    await http().post("/auth/forgotPassword", form);
    navigate('/reset-password')
  };

  return (
    <div className="flex h-screen">
      <div className="basis-1/2 bg-[url('../images/background.png')]">
        <div className="bg-violet-900/80 h-screen">
          <div className="flex flex-col pl-14 py-10 h-screen">
            <img
              className="w-64 mb-10"
              src={require("../assets/images/tickitz-big.png")}
              alt="bg"
            />
            <h1 className="text-4xl text-white mb-7">
              Lets reset your password
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              To be able to use your account again, please
              <br />
              complete the following steps.
            </p>
            <div className="flex gap-5">
              <div className="w-14 flex flex-col gap-6">
                <div className="flex justify-center items-center font-bold text-violet-800 border-2 border-white bg-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
                  1
                </div>
                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
                  2
                </div>
                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
                  3
                </div>
                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4">
                  4
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-white text-lg py-3.5">
                  Fill your complete email
                </div>
                <div className="text-gray-300 text-lg py-3.5">
                  Check your email
                </div>
                <div className="text-gray-300 text-lg py-3.5">
                  Enter your new password
                </div>
                <div className="text-gray-300 text-lg py-3.5">Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 overflow-y-auto">
        <div className="p-20">
          <h1 className="text-2xl font-bold pb-4">Fill your complete email</h1>
          <p className="text-slate-400 pb-5 text-lg">
            we'll send a link to your email shortly
          </p>
          <form onSubmit={forgotRequest}>
            <div className="flex flex-col py-5">
              <label>Email</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="email"
                name="email"
                placeholder="Write your email"
              />
              <button
                type="submit"
                className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
