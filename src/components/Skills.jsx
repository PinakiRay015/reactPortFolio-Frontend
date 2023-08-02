import React from "react";
const Skills = () => {
  return (
    <div className="w-full lg:p-20 md:p-10 p-5 border  h-fit" id="experiences">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
        <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
          Skills <span className="text-green-600">&</span> Experiences
        </h2>
        <div className="md:flex justify-between w-full h-fit">
          {/* skills section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3 md:w-1/2 lg:gap-10 md:gap-10 sm:gap-14 gap-16
          ">
          <div className="flex flex-col items-center">
              <img
                className="lg:w-12 md:w-12 sm:w-12 w-10"
                src="assets/html-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-12 md:w-12 sm:w-12 w-10"
                src="assets/css-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-12 md:w-14 sm:w-14 w-12"
                src="assets/js-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-16 md:w-16 sm:w-16 w-14"
                src="assets/bootstrap-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-12 md:w-12 sm:w-12 w-10"
                src="assets/firebase-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-32 md:w-32 sm:w-32 w-28"
                src="assets/oracle-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-20 md:w-16 sm:w-16 w-16"
                src="assets/tailwind-skill.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="lg:w-40 md:w-36 sm:w-36 w-28"
                src="assets/Express-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-16 md:w-16 sm:w-16 w-14"
                src="assets/react-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-8 md:w-7 sm:w-7 w-7"
                src="assets/mongo-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-14 md:w-12 sm:w-12 w-10"
                src="assets/nodejs-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-16 md:w-12 sm:w-12 w-10"
                src="assets/git-skill.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="lg:w-16 md:w-12 sm:w-12 w-10"
                src="assets/github.png"
                alt=""
              />
            </div>
          </div>

          {/* experience section */}

          <div className="md:mt-0 mt-16 md:w-fit font-bold lg:text-xl md:text-xl sm:text-base text-sm">
            <div className="flex gap-20 mb-16 md:justify-start justify-around">
              <div className="text-green-600">Now</div>
              <div>
                <p>Technical Researcher Intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">NISER</p>
              </div>
            </div>

            <div className="flex gap-20 mb-16 md:justify-start justify-around">
              <div className="text-green-600">2022</div>
              <div>
                <p>web developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">
                  Immensphere
                </p>
                <br />
                <p>Android developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">
                  Teachnook
                </p>
                <br />
                <p>ML programmer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">
                  Zebo.AI
                </p>
              </div>
            </div>

            <div className="flex gap-20 md:justify-start justify-around">
              <div className="text-green-600">2021</div>
              <div>
                <p>Front-end developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">
                  Raise Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
