import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = () => {
  const view = () =>
  {
    toast.error("Site is under construction , Sorry!" , {
      theme:"dark"
    })
  }
  return (
    <div className="bg-white drop-shadow-md rounded-t-2xl overflow-hidden md:m-10 m-2 my-4 h-[370px]">
      <img
        className="h-40 w-full object-cover"
        src="assets/spotify.png"
        alt=""
      />
      <div className="p-4 lg:flex md:flex block justify-between">
        <h1 className="font-semibold">Spotify Clone</h1>
        <ul className="p-4 lg:flex md:flex block justify-between">
          <img className="md:h-8 h-5" src="assets/react.png" alt="" />
        </ul>
      </div>
        <button onClick={view} className="absolute bottom-0 bg-green-400 mt-8 text-xl py-2 hover:bg-green-600 hover:text-white transition duration-300 w-full font-semibold">
          view 
        </button>
        <div className="absolute top-0 bg-[#081c15c3] cursor-pointer rounded-md m-3 px-2 py-[2.5px]">
          <p className="text-white" >Request Code</p>
        </div>
    </div>
  );
};

export default Card;
