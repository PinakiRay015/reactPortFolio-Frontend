import React from "react";
import Slider from "react-slick";
import projectData from "./Cards/ProjectItem";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="projects border w-full lg:p-20 md:p-10 p-5 h-fit bg-[#e9ecef]"
      id="projects"
    >
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
        <div>
          <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
            Most Popular <span className="text-green-600">Projects.</span>
          </h2>
          <p className="lg:text-lg md:text-base sm:text-sm text-xs">
            Various versions have been evolved over the time , sometimes by
            accident.
          </p>
        </div>
        <Slider {...settings}>
          {projectData.map((items) => {
            return (
              <div className="lg:px-10 lg:py-10 sm:px-2 sm:py-10 py-10 px-2">
                <div className=" bg-white drop-shadow-md rounded-t-2xl overflow-hidden border h-[370px]">
                  <img
                    className="h-40 w-full object-cover"
                    src={items.src}
                    alt=""
                  />
                  <div className="p-4 lg:flex md:flex block justify-between">
                    <h1 className="lg:text-lg md:text-base text-sm font-semibold">
                      {items.h1}
                    </h1>
                    <ul className="flex flex-wrap justify-center items-center gap-3 md:mt-0 mt-10">
                      <img className="md:h-8 h-5" src={items.img1} alt="" />
                      <img className="md:h-8 h-5" src={items.img2} alt="" />
                      <img className="md:h-7 h-5" src={items.img3} alt="" />
                      <img className="md:h-7 h-5" src={items.img4} alt="" />
                    </ul>
                  </div>
                  <button onClick={items.click} className="absolute bottom-0 bg-green-400 mt-8 text-xl py-2 hover:bg-green-600 hover:text-white transition duration-300 w-full font-semibold">
                    view
                  </button>
                  <div className="absolute top-0 bg-[#6a040e9d] cursor-pointer rounded-md m-3 px-2 py-[2.5px]">
                    <p className="text-white">Request Code</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
