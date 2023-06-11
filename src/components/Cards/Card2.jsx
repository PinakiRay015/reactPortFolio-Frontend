import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = () => {
  const view = () =>
  {
    toast.warning("Opening the project" , {
      theme:"dark"
    })

    setTimeout(() => {
      window.location.href = "https://scintillating-beijinho-3f8644.netlify.app"
    }, 2000);
  }
  return (
    <div className="bg-white drop-shadow-md rounded-t-2xl overflow-hidden md:m-10 m-2 my-4 h-[370px]">
      <img
        className="h-40 w-full object-cover"
        src="assets/weather.png"
        alt=""
      />
      <div className="p-4 lg:flex md:flex block justify-between">
        <h1 className="font-semibold">Weather Forecast</h1>
        <ul className="flex flex-wrap justify-center items-center gap-3 md:mt-0 mt-10">
          <img className="md:h-8 h-5" src="assets/react.png" alt="" />
          <p className="font-bold">+</p>
          <img className="md:h-8 h-5" src="assets/tailwindCss.png" alt="" />
        </ul>
      </div>
        <button onClick={view} className="absolute bottom-0 bg-green-400 mt-8 text-xl py-2 hover:bg-green-600 hover:text-white transition duration-300 w-full font-semibold">
          view 
        </button>
        <div className="absolute top-0 bg-[#f48d06a8] cursor-pointer rounded-md m-3 px-2 py-[2.5px]">
          <p className="text-white" >Request Code</p>
        </div>
    </div>
  );
};

export default Card;
