import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col  w-[400px] h-[50vh] space-y-10">
        <h1 className="text-2xl font-bold text-center">Sign in With Hostel</h1>
        <form>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold ">
              Username or email address
            </label>
            <input
              className="border border-gray-500 rounded outline-blue-500 focus:ring-blue-500 h-12 text-2xl pl-2"
              type="email"
            />
            <label htmlFor="" className="font-semibold ">
              Password
            </label>
            <input
              className="border border-gray-500 rounded outline-blue-500 focus:ring-blue-500 h-12 text-2xl pl-2"
              type="password"
            />
            <button
              type="submit"
              className="border border-gray-200 h-12 text-2xl text-gray-700 mt-2 bg-orange-300 rounded-2xl font-mono hover:bg-amber-400 active:bg-amber-300"
            >
              Login
            </button>
            <button className="text-xl mt-2 font-semibold">
              New user?{" "}
              <Link className="text-blue-700 " to="/signup">
                Register here
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
