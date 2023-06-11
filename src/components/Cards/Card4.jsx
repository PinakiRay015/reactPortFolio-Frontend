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
        src="assets/gaming.png"
        alt=""
      />
      <div className="p-4 lg:flex md:flex block justify-between">
        <h1 className="font-semibold">Gaming hardware UI</h1>
        <ul className="flex flex-wrap justify-center items-center gap-3 md:mt-0 mt-10">
          <img className="md:h-8 h-5" src="assets/html.png" alt="" />
          <p className="font-bold">+</p>
          <img className="md:h-8 h-5" src="assets/css.png" alt="" />
          <p className="font-bold">+</p>
          <img className="md:h-7 h-5" src="assets/javascript.png" alt="" />
          <p className="font-bold">+</p>
          <img className="md:h-7 h-5" src="assets/bootstrap.png" alt="" />
        </ul>
      </div>
        <button onClick={view} className="absolute bottom-0 bg-green-400 mt-8 text-xl py-2 hover:bg-green-600 hover:text-white transition duration-300 w-full font-semibold">
          view 
        </button>
        <div className="absolute top-0 bg-white cursor-pointer rounded-md m-3 px-2 py-[2.5px]">
          <p className="text-black" >Request Code</p>
        </div>
    </div>
  );
};

export default Card;
