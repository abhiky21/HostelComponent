import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col  w-[400px] h-[50vh] space-y-10">
        <h1 className="text-2xl font-bold text-center">Sign up With Hostel</h1>
        <form>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-semibold ">
              Enter Full Name
            </label>
            <input
              className="border border-gray-500 rounded outline-blue-500 focus:ring-blue-500 h-12 text-2xl pl-2"
              type="text"
            />
            <label htmlFor="" className="font-semibold ">
              Enter Email Address
            </label>
            <input
              className="border border-gray-500 rounded outline-blue-500 focus:ring-blue-500 h-12 text-2xl pl-2"
              type="email"
            />
            <label htmlFor="" className="font-semibold ">
              Enter Username
            </label>
            <input
              className="border border-gray-500 rounded outline-blue-500 focus:ring-blue-500 h-12 text-2xl pl-2"
              type="text"
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
              className=" h-12 text-2xl text-gray-100 mt-2 bg-green-500 rounded-2xl font-semibold hover:bg-green-600 active:bg-green-500"
            >
              Sign-Up
            </button>
            <button className="text-xl mt-2 font-semibold">
              Already have an account?{" "}
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
