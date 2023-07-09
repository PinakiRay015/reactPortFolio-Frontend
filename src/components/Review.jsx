import React from "react";
import reviews from "./ReviewCard/ReviewItems";
import Slider from "react-slick";
const Review = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div
      className="w-full h-fit lg:p-20 md:p-10 p-5 border bg-[#e9ecef]"
      id="reviews"
    >
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
        <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
          What They <span className="text-green-600">Say About Me</span>
        </h2>
        <Slider {...settings}>
          {reviews.map((myReview) => {
            return (
              <div>
                <div className="relative bg-white max-w-screen-md lg:h-60 md:h-60 h-72 rounded-lg my-4 m-2 p-2 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center w-fit">
                      <img
                        className="w-12 rounded-full"
                        src={myReview.src}
                        alt=""
                      />
                      <div className="">
                        <h2 className="text-lg font-bold">{myReview.name}</h2>
                        <p className="text-[13px] bg-gradient-to-r from-[#f0073b] to-[#f89b29] bg-clip-text text-transparent font-bold">
                          <i class="fa-brands fa-instagram"></i>{" "}
                          {myReview.social}
                        </p>
                      </div>
                    </div>
                    <img className="w-16" src="assets/quotation.png" alt="" />
                  </div>
                  <div className="text-gray-800 py-5 max-w-sm m-auto leading-8">
                    {myReview.comment}
                  </div>
                  <div className="absolute bottom-0 text-yellow-500 border-t-2 w-full py-3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
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

export default Review;
