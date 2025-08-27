import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
         <div>
            <ul className="flex flex-row space-x-10 p-4 font-semibold ">
                <li className="hover:bg-gray-400 rounded-2xl p-4 cursor-pointer"><Link className="nav-link" to="/">Booking</Link></li>
                <li className="hover:bg-gray-400 rounded-2xl p-4 cursor-pointer"><Link to="/contactus">Contact Us</Link></li>
            </ul>
         </div>
    )
}