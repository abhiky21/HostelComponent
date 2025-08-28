import React, { useState } from "react";
import facebook from "../../public/facebook.png";
import insta from "../../public/instagram.png";
import xlogo from "../../public/x-logo.png";

export default function ContactUs() {
  const [heading, setHeading] = useState("");
  const [changeAnimate, setChangeAnimate] = useState("");

  const handleClick = () => {
    setHeading("Enter Full Name");
    let val = "red";
    setChangeAnimate(val);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="border border-gray-950 rounded-2xl w-[600px] h-[500px] p-10 ">
          {/* <form action=""> */}
          <div className="float-left space-y-20">
            <div className="flex flex-col">
              <label
                id="headinglabel"
                className={`relative top-9 left-3.5 font-semibold ${
                  heading == "Enter Full Name" ? "show" : "hidden"
                }`}
                style={{ color: `${changeAnimate}` }}
              >
                {heading}
              </label>
              <input
                type="text"
                onClick={handleClick}
                className=" border-gray-950 border-b-4 font-bold py-3 px-3 w-[250px] outline-none"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                className=" border-gray-950 border-b-4 font-bold py-3 px-3 outline-none"
                placeholder="E-mail"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className=" border-gray-950 border-b-4 font-bold py-3 px-3 outline-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 w-[200px] rounded-2xl text-white p-3 font-semibold text-2xl hover:bg-gray-800 active:bg-gray-950 cursor-pointer"
            >
              Contact Us
            </button>
            {/* </form> */}
          </div>
          <div className="space-y-20 ml-100 mt-10">
            <div>
              <h1 className="text-3xl font-serif">Contact</h1>
              <p>abhiky21@gmail.com</p>
            </div>
            <div>
              <h1 className="text-3xl font-serif">Based in</h1>
              <p>New Delhi</p>
              <p>India</p>
            </div>
            <div>
              <ul className="flex flex-row space-x-4">
                <li>
                  <img
                    className="w-6 cursor-pointer"
                    src={facebook}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    className="w-6 cursor-pointer"
                    src={insta}
                    alt="instagram"
                  />
                </li>
                <li>
                  <img
                    className="w-6 cursor-pointer"
                    src={xlogo}
                    alt="tweeter"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
