import React from "react";
import * as Icon from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import http from "../helpers/http";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [messageError, setMessageError] = React.useState(
    "Please fill all input!"
  );
  const navigate = useNavigate();

  const registerRequest = async (event) => {
    event.preventDefault();
    const { value: firstName } = event.target.firstName;
    const { value: lastName } = event.target.lastName;
    const { value: phoneNumber } = event.target.phoneNumber;
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;

    const form = new URLSearchParams({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    });

    if (
      firstName.length !== 0 &&
      lastName.length !== 0 &&
      phoneNumber.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0
    ) {
      try {
        await http().post("/auth/register", form);
        setTimeout(() => {
          navigate("/sign-in");
        }, 5000);
        setShowSuccess(true);
      } catch (error) {
        setMessageError(error.response.data.message);
      }
    }else {
      setShowAlert(true);
    }
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="md:basis-1/2 bg-[url('../images/background.png')] hidden md:block">
        <div className="bg-violet-900/80 h-screen">
          <div className="flex flex-col justify-center items-center h-screen">
            <img
              className="w-96"
              src={require("../assets/images/tickitz-big.png")}
              alt="bg"
            />
            <h1 className="text-4xl text-white">wait, watch, wow!</h1>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2 overflow-y-auto w-full">
        <div className="p-20">
          <h1 className="text-5xl font-bold pb-4">Sign Up</h1>
          <p className="text-slate-400 pb-5 text-lg">
            Fill your additional details
          </p>
          <form onSubmit={registerRequest}>
            <div className="flex flex-col py-5">
              <label>First Name</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="text"
                name="firstName"
                placeholder="Write your first name"
              />
              <label>Last Name</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="text"
                name="lastName"
                placeholder="Write your last name"
              />
              <label>Phone Number</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="text"
                name="phoneNumber"
                placeholder="Write your phone number"
              />
              <label>Email</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="email"
                name="email"
                placeholder="Write your email"
              />
              {/* <label>Password</label>
              <div className="relative">
                <Icon.Eye className="absolute right-5 top-5 text-gray-400" />
                <input
                  className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                  type="password"
                  name="password"
                  placeholder="Write your password"
                />
              </div> */}
              <div className="flex flex-col mb-2 relative">
                <label>Password</label>
                <input
                  className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Write your password"
                />
                <label
                  onClick={handlerShowPassword}
                  className="absolute right-5 top-10 cursor-pointer"
                >
                  {showPassword ? (
                    // <BsEyeSlash className="w-[20px] h-[20px]" />
                    <Icon.EyeOff className="absolute right-[-5px] top-[5px] text-gray-400" />
                  ) : (
                    // <BsEye className="w-[20px] h-[20px]" />
                    <Icon.Eye className="absolute right-[-5px] top-[5px] text-gray-400" />
                  )}
                </label>
              </div>
              {showSuccess && (
                <div className="bg-green-300 border border-green-600  rounded px-5 py-3 mb-4 text-center">
                  <span>Register Success!</span>
                  <br />
                  <span>Please wait to redirect for re-login</span>
                </div>
              )}
              {showAlert && (
                <div className="bg-red-300 border border-red-600  rounded px-5 py-3 mb-4 text-center">
                  <span>{messageError}</span>
                </div>
              )}
              <button
                type="submit"
                className="mt-2 bg-violet-800 text-white py-3 rounded-lg text-center"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center gap-2">
            <p>
              Don't have an account?{" "}
              <Link
                to="/sign-in"
                className="text-purple-800 underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
