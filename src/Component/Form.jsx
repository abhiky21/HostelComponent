import React, { useState } from "react";
import Checker from "./Checker";
import sahi from "../../public/correct.svg";
import ContactUs from "./ContactUs";

export default function Form(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(false);
  const [dise, setDise] = useState("");
  const [color, setColor] = useState("");
  const [numColor, setNumColor] = useState("");
  const [value, setValue] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  function update() {
    setDise(true);
  }

  function handlesubmitBtn() {
    if (name.length !== 0) {
      setColor("black");
      setValue("valid");
      if (number.length == 10) {
        setNumColor("black");
        if (address == address) {
          // setColor("black");
          update();
        }
      }
    }
  }

  return (
    <>
      <Checker
        button={
          dise == true ? (
            <img className="w-100 h-100 pl-30" src={sahi} alt="" />
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-800 text-center">
                {props.title}
              </h1>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-gray-700 font-medium mb-1 ">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={handleNameChange}
                    className="border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    // style={{border: value === "valid" ? `1px solid green` : `1px solid red`}}
                    type="text"
                    placeholder="Enter your name"
                    maxLength={50}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-gray-700 font-medium mb-1">
                    Phone no.
                  </label>
                  <input
                    value={number}
                    onChange={handleNumberChange}
                    className="border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    type="tel"
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Enter your phone no."
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-gray-700 font-medium mb-1">
                    Address
                  </label>
                  <textarea
                    value={address}
                    onChange={handleAddressChange}
                    className="border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    type="text"
                    placeholder="Enter your address"
                    maxLength={100}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-gray-700 font-medium mb-1">
                    Upload your photo
                  </label>
                  <input
                    className="border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    type="file"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handlesubmitBtn}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-white rounded-lg shadow-md font-semibold py-2 active:bg-amber-400"
                >
                  Submit
                </button>
              </form>
            </>
          )
        }
      />
    </>
  );
}
