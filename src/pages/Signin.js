import React from "react";
import * as Icon from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { login as loginAction } from "../redux/reducers/auth";
import { loginAction } from "../redux/actions/auth";

const Signin = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [messageError, setMessageError] = React.useState("Please fill all form");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginRequest = (event) => {
    event.preventDefault();
    const { value: email } = event.target.email;
    const { value: password } = event.target.password;

    if(email.length === 0 || password.length === 0){
      setShowAlert(true)
    }else {
      const cb = () => {
        navigate("/");
      };

      const err = (error) => {
        const errMessage = error.response.data.message;
        setMessageError(errMessage);
      };

      dispatch(loginAction({ email, password, cb, err }));
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
              className="lg:w-96 md:w-72"
              src={require("../assets/images/tickitz-big.png")}
              alt="bg"
            />
            <h1 className="text-4xl text-white">wait, watch, wow!</h1>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2 w-full">
        <div className="lg:px-20 md:p-10 p-5">
          <h1 className="text-5xl font-bold pb-4">Sign In</h1>
          <p className="text-slate-400 pb-5 text-lg">
            Sign in with your data that you entered during your registration
          </p>
          {showAlert && (
            <div className="bg-red-300 border border-red-600  rounded px-5 py-3 text-center">
              <span>{messageError}</span>
            </div>
          )}
          <form onSubmit={loginRequest}>
            <div className="flex flex-col py-5">
              <label id="email">Email</label>
              <input
                className="p-3 my-2 rounded-lg border border-slate-400 mb-4"
                type="email"
                name="email"
                placeholder="Write your email"
              />
              {/* <label id="password">Password</label>
              <div className="relative">
                <Icon.Eye className="absolute right-5 top-5 text-gray-400" />
                <input
                  className="p-3 my-2 rounded-lg border border-slate-400 mb-4 w-[100%]"
                  type="password"
                  name="password"
                  placeholder="Write your password"
                />
              </div> */}
              <div className="flex flex-col mb-7 relative">
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
              <button
                type="submit"
                className="mt-5 bg-violet-800 text-white py-3 rounded-lg text-center"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center gap-2">
            <p>
              Forgot your password?{" "}
              <Link
                to="/forgot-password"
                className="text-purple-800 underline underline-offset-4"
              >
                Reset now
              </Link>
            </p>
            <p>
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-purple-800 underline underline-offset-4"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
