import { useState } from "react";
import { BackgroundImage } from "../constants/imageConstant";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img src={BackgroundImage} alt="background" />
        <div className=" absolute min-h-screen bg-black/50 inset-0">
          <div className="container m-auto mt-[10rem] max-w-[27rem] bg-black/70 p-12 rounded-md text-white/70">
            <h1 className="font-bold text-4xl text-start">
              {isSignInForm ? "Sign In" : "Sign up"}
            </h1>
            <form action="" className=" my-4">
              {!isSignInForm && (
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full name"
                  className="w-[100%] bg-neutral-900/80 p-4 my-2 rounded-md border border-neutral-700"
                />
              )}

              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Email or mobile number"
                className="w-[100%] bg-neutral-900/80 p-4 my-2 rounded-md border border-neutral-700"
              />
              <input
                type="password"
                name="password"
                id="userPassword"
                placeholder="Password"
                className="w-[100%] bg-neutral-900/80 p-4 my-2 rounded-md border border-neutral-700"
              />

              <div id="btns" className="text-center ">
                <button
                  type="submit"
                  className="w-[100%] bg-red-700 p-2 my-2 rounded-md">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm && (
                  <div>
                    <p className="my-2">OR</p>
                    <button
                      type="submit"
                      className="w-[100%] bg-zinc-600/50 p-2 my-2 rounded-md">
                      Use a sign-in code
                    </button>
                    <p className="my-2 text-md">Forgot password?</p>
                  </div>
                )}
              </div>
              {isSignInForm && (
                <div className="flex gap-2 text-lg">
                  <input type="checkbox" name="rememberme" id="rememberme" />
                  <p>Remember me</p>
                </div>
              )}
              <p className="mt-2">
                {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
                <span className="text-white" onClick={toggleSignInForm}>
                  {isSignInForm ? "Sign up now" : "Sign in now"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
