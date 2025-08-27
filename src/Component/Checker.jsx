import React from "react";

export default function Checker({button}) {
    return (

            <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-xl w-[450px] p-8 space-y-6">
            {button} 
            </div>
            </div>

        
    )
}