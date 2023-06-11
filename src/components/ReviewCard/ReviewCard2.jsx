import React from "react";

const ReviewCard2 = () => {
  return (
    <div>
      <div className="relative bg-white max-w-screen-md lg:h-60 md:h-60 h-72 rounded-lg my-4 m-2 p-2 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-fit">
            <img
              className="w-12 rounded-full"
              src="assets/abhisek.jpg"
              alt=""
            />
            <div className="">
              <h2 className="text-lg font-bold">Abhisek Mallick</h2>
              <p className="text-[13px] bg-gradient-to-r from-[#f0073b] to-[#f89b29] bg-clip-text text-transparent font-bold">
                <i class="fa-brands fa-instagram"></i> lucifer_satan_akm
              </p>
            </div>
          </div>
          <img className="w-16" src="assets/quotation.png" alt="" />
        </div>
        <div className="text-gray-800 py-5 max-w-sm m-auto leading-8">
          Thanks for the website design draft. I think you’ve done hard work and
          achieved beautiful results. I really like the website navigation and
          visuals in it.
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

export default ReviewCard2;
