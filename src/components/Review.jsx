import React from 'react'
import ReviewCard1 from './ReviewCard/ReviewCard1'
import ReviewCard2 from './ReviewCard/ReviewCard2';
import ReviewCard3 from './ReviewCard/ReviewCard3';
import ReviewCard4 from './ReviewCard/ReviewCard4';
import ReviewCard5 from './ReviewCard/ReviewCard5';
import ReviewCard6 from './ReviewCard/ReviewCard6'
import Slider from 'react-slick';
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
    <div className='w-full h-fit lg:p-20 md:p-10 p-5 border bg-[#e9ecef]' id='reviews'>
      <div className='md:max-w-[1240px] max-w-[600px] m-auto'>
        <h2 className='lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5'>What They <span className='text-green-800'>Say About Me</span></h2>
        <Slider {...settings}>
            <ReviewCard1/>
            <ReviewCard3/>
            <ReviewCard2/>
            <ReviewCard4/>
            <ReviewCard5/>
            <ReviewCard6/>
        </Slider>
      </div>
    </div>
  )
}

export default Review
