import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Slider from "react-slick";

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
          slidesToShow: 2,
          slidesToScroll: 2,
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
      className="relative w-full lg:p-20 md:p-10 p-5 h-fit bg-[#e9ecef]"
      id="projects"
    >
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
          <div id="mycolorbox" className="absolute left-0 bottom-0 md:h-[22rem] md:w-[35rem] h-52 w-52 sm:w-72 sm:h-72 rounded-tr-full bg-gradient-to-r blur-3xl from-sky-300 to-emerald-300"></div>
          <div id="mycolorbox" className="absolute right-0 top-10 md:h-[16rem] md:w-[25rem] h-52 w-52 sm:w-72 sm:h-72 rounded-full bg-rose-300 blur-3xl"></div>
        <div>
          <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
            Most Popular <span className="text-green-800">Projects.</span>
          </h2>
          <p className="lg:text-lg md:text-base sm:text-sm text-xs">
            Various versions have been evolved over the time , sometimes by
            accident.
          </p>
        </div>
        <Slider {...settings}>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
