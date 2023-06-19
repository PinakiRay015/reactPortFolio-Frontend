import React from "react";
const Skills = () => {
  return (
    <div className="w-full lg:p-20 md:p-10 p-5 border h-fit" id="experiences">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
        <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
          Skills <span className="text-green-800">&</span> Experiences
        </h2>
        <div className="md:flex justify-between w-full h-fit">

            {/* skills section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3 md:w-1/2 gap-4">
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/htmlskill.png" alt="" />
              <p className="text-center lg:text-lg md:text-base text-xs">html</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/css-skill.png" alt="" />
              <p className="text-center">css</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/js-skill.png" alt="" />
              <p className="text-center">javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/bootstrap-skill.png" alt="" />
              <p className="text-center">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/tailwind-skill.png" alt="" />
              <p className="text-center">Tailwind css</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/Express-skill.png" alt="" />
              <p className="text-center">express js</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/react-skill.png" alt="" />
              <p className="text-center">React js</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/mongoDB-skill.png" alt="" />
              <p className="text-center">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/node-skill.png" alt="" />
              <p className="text-center">Node js</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/oracle-skill.png" alt="" />
              <p className="text-center">Oracle</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/git-skill.png" alt="" />
              <p className="text-center">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/lr-skill.png" alt="" />
              <p className="text-center">Lightroom</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/photoshop-skill.png" alt="" />
              <p className="text-center">Photoshop</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/pr-skill.png" alt="" />
              <p className="text-center">Premeire pro</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/ppt-skill.png" alt="" />
              <p className="text-center">Powerpoint</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="lg:w-20 md:w-16 sm:w-14 w-12" src="assets/word-skill.png" alt="" />
              <p className="text-center">MS Word</p>
            </div>
          </div>
          
          {/* experience section */}

          <div className="md:mt-0 mt-16 md:w-fit font-bold lg:text-xl md:text-xl sm:text-base text-sm">
          <div className="flex gap-20 mb-16 md:justify-start justify-around">
            <div className="text-green-800">Now</div>
            <div>
                <p>Technical Researcher Intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">NISER</p>
            </div>
            </div>

          <div className="flex gap-20 mb-16 md:justify-start justify-around">
            <div className="text-green-800">2022</div>
            <div>
                <p>web developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">Immensphere</p>
                <br />
                <p>Android developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">Teachnook</p>
                <br />
                <p>ML programmer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">Zebo.AI</p>
            </div>
            </div>

            <div className="flex gap-20 md:justify-start justify-around">
            <div className="text-green-800">2021</div>
            <div>
                <p>Front-end developer intern</p>
                <p className="lg:text-lg font-semibold text-gray-400 ">Raise Digital</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
