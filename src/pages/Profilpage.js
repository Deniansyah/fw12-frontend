import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helpers/http";
import { useSelector } from "react-redux";

import Navbarlogin from "../components/Navbarlogin";
import Footer from "../components/Footer";

const Profilpage = () => {
  const [showTop, setShowTop] = React.useState(false);
  const [showBottom, setShowBottom] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({});

  const getUserProfile = async () => {
    const { data } = await http(token).get("/profile");
    setDataUser(data.results);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const values = new URLSearchParams({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
    });
    setIsLoading(true);
    await http(token).patch(`/profile`, values);
    setMessage("Profile Updated");
    setIsLoading(false);
    setTimeout(() => {
      setMessage("");
    }, [5000]);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const values = new URLSearchParams({
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    });
    setIsLoading(true);
    await http(token).patch(`/profile`, values);
    setMessage("Password Updated");
    setIsLoading(false);
    setTimeout(() => {
      setMessage("");
    }, [5000]);
  }

  useEffect(() => {
    getUserProfile();
  });

  const handlerShowTop = () => {
    setShowTop(!showTop);
  };

  const handlerShowBottom = () => {
    setShowBottom(!showBottom);
  };

  return (
    <>
      <Navbarlogin></Navbarlogin>
      <div className="flex px-[130px] py-10 bg-gray-100 gap-5">
        <div className="basis-[1/4]">
          <div className="bg-white rounded-md shadow-lg">
            <h3 className="text-gray-500 px-8 py-4">INFO</h3>
            <div className="flex flex-col justify-center items-center pb-3 border-b px-8">
              <img
                className="w-32"
                src={require("../assets/images/profil.png")}
                alt="profil"
              />
              <h2 className="font-bold">
                {dataUser?.firstName + " " + dataUser?.lastName}
              </h2>
              <p className="text-sm text-gray-400">Moviegoers</p>
            </div>
            <div className="px-8 my-5 pb-5">
              <button
                type="submit"
                onClick={() => dispatch(logoutAction())}
                className="text-center bg-violet-800 py-2 px-10 rounded-md text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="flex px-8 bg-white rounded-md w-full gap-5 mb-10">
            <div className="py-5 border-b-2 border-violet-800">
              <Link to="/profil" className="font-bold">
                Account Settings
              </Link>
            </div>
            <div className="py-5">
              <Link to="/history" className="text-gray-400">
                Order History
              </Link>
            </div>
          </div>
          <form onSubmit={updateUser}>
            <div className="bg-white rounded-md p-8 mb-5">
              <div className="border-b pb-3 mb-7">
                <p className="font-bold">Details Information</p>
              </div>
              {message && (
                <div className="w-full flex justify-center bg-green-500 my-2 py-1 rounded-md">
                  <p className="text-white">{message}</p>
                </div>
              )}
              <div className="flex gap-5">
                <div className="basis-1/2 flex flex-col">
                  <label>First Name</label>
                  <input
                    className="p-2 my-2 rounded-lg border border-slate-400 mb-4"
                    type="text"
                    name="firstName"
                    placeholder="Write your first name"
                    defaultValue={dataUser.firstName}
                  />
                </div>
                <div className="basis-1/2 flex flex-col">
                  <label>Last Name</label>
                  <input
                    className="p-2 my-2 rounded-lg border border-slate-400 mb-4"
                    type="text"
                    name="lastName"
                    placeholder="Write your last name"
                    defaultValue={dataUser.lastName}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="basis-1/2 flex flex-col">
                  <label>Email</label>
                  <input
                    className="p-2 my-2 rounded-lg border border-slate-400 mb-4"
                    type="email"
                    name="email"
                    placeholder="Write your email"
                    defaultValue={dataUser.email}
                  />
                </div>
                <div className="basis-1/2 flex flex-col">
                  <label>Phone Number</label>
                  <input
                    className="p-2 my-2 rounded-lg border border-slate-400 mb-4"
                    type="text"
                    name="phoneNumber"
                    placeholder="Write your phone number"
                    defaultValue={dataUser.phoneNumber}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-violet-800 text-white py-2 px-14 rounded-md mb-5"
            >
              Update changes
            </button>
          </form>
          <form onSubmit={updatePassword}>
            <div className="bg-white rounded-md p-8 mb-5">
              <div className="border-b pb-3 mb-7">
                <p className="font-bold">Account and Privacy</p>
              </div>
              {message && (
                <div className="w-full flex justify-center bg-green-500 my-2 py-1 rounded-md">
                  <p className="text-white">{message}</p>
                </div>
              )}
              <div className="flex gap-5">
                <div className="basis-1/2 flex flex-col">
                  <div className="flex flex-col relative">
                    <label>New Password</label>
                    <input
                      className="p-2 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                      type={showTop ? "text" : "password"}
                      name="password"
                      placeholder="Write your new password"
                    />
                    <label
                      onClick={handlerShowTop}
                      className="absolute right-5 top-10 cursor-pointer"
                    >
                      {showTop ? (
                        <Icon.EyeOff className="absolute right-[-5px] text-gray-400" />
                      ) : (
                        <Icon.Eye className="absolute right-[-5px] text-gray-400" />
                      )}
                    </label>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col">
                  <div className="flex flex-col relative">
                    <label>Confirm Password</label>
                    <input
                      className="p-2 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                      type={showBottom ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Write your confirm password"
                    />
                    <label
                      onClick={handlerShowBottom}
                      className="absolute right-5 top-10 cursor-pointer"
                    >
                      {showBottom ? (
                        <Icon.EyeOff className="absolute right-[-5px] text-gray-400" />
                      ) : (
                        <Icon.Eye className="absolute right-[-5px] text-gray-400" />
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-violet-800 text-white py-2 px-14 rounded-md"
            >
              Update changes
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profilpage;
