import React, { useState } from "react";
import facebook from "../../public/facebook.png";
import insta from "../../public/instagram.png";
import xlogo from "../../public/x-logo.png";

export default function ContactUs() {
  // const [heading, setHeading] = useState("");
  // const [changeAnimate, setChangeAnimate] = useState("");

  // const handleClick = () => {
  //   setHeading("Enter Full Name");
  //   let val = "red";
  //   setChangeAnimate(val);
  // };
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
        <div className="max-w-[1500px] w-full flex flex-col xxl:flex-row gap-8">
          {/* Left Section */}
          <div className="shadow-lg rounded-2xl w-full xxl:w-[600px] p-10 bg-cyan-200 flex items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-gray-900">Let’s Talk</h1>
          </div>

          {/* Right Section */}
          <div className="border border-gray-200 shadow-md rounded-2xl w-full xxl:w-[850px] p-10 flex flex-col lg:flex-row gap-10">
            {/* Form */}
            <form className="flex flex-col gap-6 w-full lg:w-1/2">
              <input
                type="text"
                className="border-b-2 border-gray-400 focus:border-cyan-500 font-medium py-3 px-2 outline-none transition w-full"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="border-b-2 border-gray-400 focus:border-cyan-500 font-medium py-3 px-2 outline-none transition w-full"
                placeholder="Email Address"
              />
              <textarea
                rows="4"
                className="border-b-2 border-gray-400 focus:border-cyan-500 font-medium py-3 px-2 outline-none transition w-full resize-none"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white rounded-xl py-3 px-6 font-semibold text-lg transition"
              >
                Contact Us
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2 tracking-wide">
              <div>
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="text-gray-600">this@gmail.com</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Based in</h2>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Follow</h2>
                <ul className="flex space-x-4 mt-2">
                  <li>
                    <img
                      className="w-6 cursor-pointer hover:scale-110 transition"
                      src={facebook}
                      alt="facebook"
                    />
                  </li>
                  <li>
                    <img
                      className="w-6 cursor-pointer hover:scale-110 transition"
                      src={insta}
                      alt="instagram"
                    />
                  </li>
                  <li>
                    <img
                      className="w-6 cursor-pointer hover:scale-110 transition"
                      src={xlogo}
                      alt="twitter"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
