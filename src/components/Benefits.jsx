import React from "react";
import Tilt from "react-parallax-tilt";
const Benefits = () => {
  return (
    <div className="md:max-w-[1240px] max-w-[600px] my-14 m-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="benefits">
      <div id="benefits" className="p-5 grid md:grid-rows-2 sm:grid-rows-3 rounded-md grid-rows-6 grid-flow-col gap-3">
        <Tilt
          glareEnable={true}
          tiltMaxAngleY={10}
          tiltMaxAngleX={10}
          className="p-10 cursor-pointer flex items-center justify-center row-span-2 md:col-span-2 sm:col-span-2 mycontainer hover:bg-[rgba(255,255,255,0.3)] transition delay-50 ease-in-out duration-75 shadow-xl  rounded-lg border text-center align-middle"
        >
          <div>
            <h2 className="text-3xl font-bold">
              Webflow developer at the intersection of design and code.
            </h2>
          </div>
        </Tilt>
        <Tilt glareEnable={true}>
          <div className=" mycontainer flex items-center justify-center md:col-span-1 hover:bg-[rgba(255,255,255,0.3)] transition delay-50 ease-in-out duration-75 shadow-xl rounded-lg cursor-pointer border text-center align-middle">
            <div>
              <img className="h-[200px]" src="assets/scalable.png" alt="" />
              <h2 className="font-bold">Scalable CMS</h2>
            </div>
          </div>
        </Tilt>
        <Tilt className="mycontainer flex items-center justify-center  hover:bg-[rgba(255,255,255,0.3)] transition delay-50 ease-in-out duration-75 shadow-xl  rounded-lg cursor-pointer border text-center align-middle">
          <div>
            <img className="h-[200px]" src="assets/optimize.png" alt="" />
            <h2 className="font-bold">Optimize code</h2>
          </div>
        </Tilt>
        <Tilt className="md:row-span-1 mycontainer flex items-center justify-center hover:bg-[rgba(255,255,255,0.3)] transition delay-50 ease-in-out duration-75 shadow-xl  rounded-lg cursor-pointer border text-center align-middle">
          <div>
            <img className="h-[200px]" src="assets/responsive.png" alt="" />
            <h2 className="font-bold">Responsive Design</h2>
          </div>
        </Tilt>
        <Tilt className="md:row-span-1 sm:row-span-2 mycontainer flex items-center justify-center hover:bg-[rgba(255,255,255,0.3)] transition delay-50 ease-in-out duration-75 shadow-xl rounded-lg cursor-pointer border text-center align-middle">
          <div>
            <img className="h-[200px]" src="assets/pixel-perfect.png" alt="" />
            <h2 className="font-bold">Pixel perfect development</h2>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Benefits;
