import React from "react";
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Hero = () => {
  const resume = () => {
    toast.success("Resume fetched successfully", {
      theme: "dark",
    });

    setTimeout(() => {
      window.location.href =
        "https://drive.google.com/file/d/1rdgdCYBqg_tSuzFlgWFDPbpPxNsFujZZ/view?usp=drive_link";
    }, 2000);
  };
  return (
    <div className="hero w-full mt-[80px] lg:p-20 md:p-10 p-5 h-fit" id="hero">
      <ToastContainer />
      <div className="md:max-w-[1240px] max-w-[600px] m-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <p className="text-green-300 font-medium md:text-3xl sm:text-2xl text-sm py-2">
              Hello 👋, I'm Pinaki Sankar Ray
            </p>
            <h1 className="lg:leading-[72px] text-white md:text-4xl lg:text-6xl sm:text-4xl text-xl py-2 font-bold">
              Access To <span className="text-green-600">2000+</span> web
              designs from <span className="text-green-600">300+</span>{" "}
              templates & projects
            </h1>
            <p className="md:text-lg sm:text-lg text-xs text-gray-400 py-2">
              I'm a web developer, designer & digital illustrator
            </p>
            <form className="bg-white lg:max-w-[590px] p-2 shadow-lg rounded-md py-2 md:flex justify-between items-center">
              <div>
                <p className="lg:text-xl md:text-lg sm:text-lg text-xs">
                  Want to know me better?
                </p>
              </div>
              <button
                type="button"
                onClick={resume}
                className="bg-green-500 md:py-2 md:px-6 py-1 px-1 md:w-fit w-full md:mt-0 mt-3 rounded-md shadow-xl"
              >
                View Resume
              </button>
            </form>
          </div>
        </div>

        {/* image section  */}
        <Tilt
          className="md:order-last order-first"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <img className="cursor-pointer" src="assets/hero.png" alt="" />
        </Tilt>
      </div>

      <div className="relative w-full mt-32 p-15">
        <div id="mylogo" className="md:max-w-[1440px] max-w-[600px] m-auto">
          <h1
            id="herotext"
            className="text-center font-extrabold	 md:text-5xl lg:text-8xl sm:text-5xl text-3xl"
          >
            World-class Websites for ambitious projects.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
