import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="flex flex-row space-x-10 p-4 font-semibold sticky">
        <li>
          <Link
            className="nav-link rounded-2xl p-4 hover:bg-gray-400 cursor-pointer"
            to="/"
          >
            Booking
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            className="nav-link rounded-2xl p-4 hover:bg-gray-400 cursor-pointer"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="nav-link rounded-2xl p-4 hover:bg-gray-400 cursor-pointer"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="nav-link rounded-2xl p-4 hover:bg-gray-400 cursor-pointer"
          >
            Sign-Up
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link rounded-2xl p-4 hover:bg-gray-400 cursor-pointer"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
