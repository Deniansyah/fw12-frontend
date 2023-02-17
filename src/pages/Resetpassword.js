import React from "react";
import * as Icon from "react-feather";
import http from "../helpers/http";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [showTop, setShowTop] = React.useState(false);
  const [showBottom, setShowBottom] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [messageError, setmessageError] = React.useState("");
  const navigate = useNavigate();

  const handlerShowTop = () => {
    setShowTop(!showTop);
  };

  const handlerShowBottom = () => {
    setShowBottom(!showBottom);
  };

  const resetRequest = async (event) => {
    event.preventDefault();
    const { value: code } = event.target.code;
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;
    const { value: confirmPassword } = event.target.confirmPassword;

    try {
      const form = new URLSearchParams({
        code,
        email,
        password,
        confirmPassword,
      });
      await http().post("/auth/resetPassword", form);
      setTimeout(() => {
        navigate("/sign-in");
      }, 5000);
      setShowSuccess(true)
    } catch (error) {
      setShowAlert(true);
      setmessageError(error.response.data.message);
    }
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
                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
                  1
                </div>
                <div className="flex justify-center items-center font-bold text-white border-2 border-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
                  2
                </div>
                <div className="flex justify-center items-center font-bold text-violet-800 border-2 border-white bg-white rounded-full py-3.5 px4 after:content-[''] after:border-2 after:border-r after:border-white after:h-7 after:absolute relative after:right-6 after:top-[52px]">
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
        <div className="px-20 pt-10">
          <h1 className="text-2xl font-bold pb-4">
            Fill your complete password
          </h1>
          <p className="text-slate-400 pb-5 text-lg">set your new password</p>
          {showAlert && (
            <div className="bg-red-300 border border-red-600  rounded px-5 py-3 text-center">
              <span>{messageError}</span>
            </div>
          )}
          {showSuccess && (
            <div className="bg-green-300 border border-green-600  rounded px-5 py-3 text-center">
              <span>Reset succesfuly, Please wait for redirect to re-login</span>
            </div>
          )}
          <form onSubmit={resetRequest}>
            <div className="flex flex-col py-5">
              <label id="code">Code</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="text"
                name="code"
                placeholder="Write your code"
              />
              <label id="email">Email</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="email"
                name="email"
                placeholder="Write your email"
              />
              <div className="flex flex-col relative">
                <label>New Password</label>
                <input
                  className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                  type={showTop ? "text" : "password"}
                  name="password"
                  placeholder="Write your new password"
                />
                <label
                  onClick={handlerShowTop}
                  className="absolute right-5 top-10 cursor-pointer"
                >
                  {showTop ? (
                    <Icon.EyeOff className="absolute right-[-5px] top-[5px] text-gray-400" />
                  ) : (
                    <Icon.Eye className="absolute right-[-5px] top-[5px] text-gray-400" />
                  )}
                </label>
              </div>
              <div className="flex flex-col relative">
                <label>Confirm Password</label>
                <input
                  className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                  type={showBottom ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Write your confirm password"
                />
                <label
                  onClick={handlerShowBottom}
                  className="absolute right-5 top-10 cursor-pointer"
                >
                  {showBottom ? (
                    <Icon.EyeOff className="absolute right-[-5px] top-[5px] text-gray-400" />
                  ) : (
                    <Icon.Eye className="absolute right-[-5px] top-[5px] text-gray-400" />
                  )}
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
