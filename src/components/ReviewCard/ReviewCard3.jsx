import React from "react";

const ReviewCard3 = () => {
  return (
    <div>
      <div className="relative bg-white max-w-screen-md lg:h-60 md:h-60 h-72 rounded-lg my-4 m-2 p-2 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-fit">
            <img className="w-12 rounded-full" src="assets/satyam.jpg" alt="" />
            <div className="">
              <h2 className="text-lg font-bold">Priyanshu Patra</h2>
              <p className="text-[13px] bg-gradient-to-r from-[#f0073b] to-[#f89b29] bg-clip-text text-transparent font-bold">
                <i class="fa-brands fa-instagram"> mr_skull_11</i>
              </p>
            </div>
          </div>
          <img className="w-16" src="assets/quotation.png" alt="" />
        </div>
        <div className="text-gray-800 py-5 w-2/3 m-auto leading-8">
          Excellent project ❤️❤️
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
};

export default ReviewCard3;
