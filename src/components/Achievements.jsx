import React from "react";

const Achievements = () => {
  return (
    <div className="w-full lg:p-20 md:p-10 p-5 border h-fit" id="achievements">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
          <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
            My <span className="text-green-600">Achievements</span>{" "}
          </h2>
        <div className="grid md:grid-cols-2">
          <div className="grid grid-flow-col sm:justify-around md:justify-end justify-center gap-20 items-center grid-rows-2">
            <div className="w-fit md:flex gap-2 items-center">
              <img className="lg:h-20 md:h-20 sm:h-20 h-16" src="assets/happy-clients.png" alt="" />
              <div className="sm:my-4">
                <p className="lg:text-2xl md:text-xl text-lg font-semibold  ">
                  28 <span>+</span>{" "}
                </p>
                <p className="lg:text-lg md:text-base text-sm">Happy Clients</p>
              </div>
            </div>
            <div className=" w-fit md:flex gap-2 items-center">
              <img className="lg:h-20 md:h-20 sm:h-20 h-16" src="assets/calender.png" alt="" />
              <div className="sm:my-4">
                <p className="lg:text-2xl md:text-xl text-lg font-semibold  ">
                  3 <span>Years</span>{" "}
                </p>
                <p className="lg:text-lg md:text-bese text-sm">Experience</p>
              </div>
            </div>
            <div className="w-fit md:flex gap-2 items-center">
              <img className="lg:h-20 md:h-20 sm:h-20 h-16" src="assets/passion.png" alt="" />
              <div className="sm:my-4">
                <p className="lg:text-2xl md:text-xl text-lg font-semibold  ">
                  20<span>+</span>{" "}
                </p>
                <p className="text-lg">Projects</p>
              </div>
            </div>
            <div className="w-fit md:flex gap-2 items-center">
              <img className="lg:h-20 md:h-20 sm:h-20 h-16" src="assets/project.png" alt="" />
              <div className="sm:my-4">
                <p className="lg:text-2xl md:text-xl text-lg font-semibold  ">
                  100<span>%</span>{" "}
                </p>
                <p className="text-lg">passion</p>
              </div>
            </div>
          </div>
          <div className="flex  md:order-last order-first justify-center mb-12 md:mb-0">
            <img className="lg:h-96 md:h-80 sm:h-72 h-52" src="assets/achievements.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
