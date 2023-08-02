import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  function toggle() {
    var menu = document.getElementById("menu");
    const bar = document.getElementById("menubar");
    if (menu.src.match("assets/menu.png")) {
      menu.src = "assets/close.png";
      bar.style.display = "block";
    } else {
      menu.src = "assets/menu.png";
      bar.style.display = "none";
    }
  }

  return (
    <div className="w-full fixed bg-[#f3f3ff] drop-shadow-md z-10 top-0 h-[80px] border-b">
      <div className="flex md:max-w-[1240px] max-w-[600px] w-full h-full m-auto justify-between items-center md:px-0 px-4">
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <img
            className="lg:w-48 md:w-36 w-32 cursor-pointer"
            src="assets/logo-black.png"
            alt=""
          />
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="benefits"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Benefits
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Achievements
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="hobbies"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Hobbies
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="experiences"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Experiences
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Reviews
              </Link>
            </li>
            <li className="cursor-pointer font-semibold text-md hover:text-green-600">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className='hidden md:flex text-lg'>
            <button className='flex items-center justify-between mx-3 px-6 gap-2'>
                <img src="assets/lock.png" alt="" />
                login
            </button>
            <button className='bg-green-800 px-8 py-1 text-white rounded-md'>
                sign up
            </button>
        </div> */}

        <div className="md:hidden">
          <img
            id="menu"
            className="w-8"
            src="assets/menu.png"
            alt=""
            onClick={toggle}
          />
        </div>
      </div>

      <div className="md:hidden bg-[#353535e2] absolute border-b z-10  w-full">
        <ul
          className="leading-10 max-w-[600px] text-white m-auto"
          id="menubar"
          style={{ display: "none" }}
        >
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Home</li>
          </Link>
          <Link
            to="benefits"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Benefits</li>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Projects</li>
          </Link>
          <Link
            to="achievements"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">
              Achievements
            </li>
          </Link>
          <Link
            to="hobbies"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Hobbies</li>
          </Link>
          <Link
            to="experiences"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Experience</li>
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Reviews</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="hover:bg-gray-300 p-1 cursor-pointer">Contact me</li>
          </Link>

          {/* <div className='flex flex-col my-5 gap-3 px-2'>
            <button className='flex items-center justify-center border border-green-600 gap-2 rounded-md'>
                <img src="assets/lock.png" alt="" />
                login
            </button>
            <button className='bg-green-600 px-5 py-1 text-white rounded-md'>
                sign up
            </button>
            </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
