import React , {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "../App";
import {Link} from "react-scroll"
const Footer = () => {

  const [mail, setMail] = useState("")

  const subscribe = async (e) => {
    e.preventDefault();
  
    if (!mail) {
      toast.error('Please enter your email', { theme: 'dark' });
      return;
    }
  
    toast.warning('Form is submitting', { theme: 'dark' });
  
    try {
      let response = await fetch(`${URL}/api/partner`, {
        method: 'post',
        body: JSON.stringify({ mail }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
      console.warn(result);
  
      if (result) {
        toast.success('Thanks for subscribing 😊. We will contact you shortly.', {
          theme: 'dark',
        });
        setMail('');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { theme: 'dark' });
    }
  };
  

  return (
    <div className="footer w-full h-fit p-3">
      <ToastContainer closeButton={false} />
      <div
        id="main-footer-box"
        className="md:max-w-[1240px] max-w-[600px] m-auto"
      >
        <div className="md:flex justify-between">
          <div>
            <p className="text-lime-200">Want to build or design something?</p>
            <p className="text-white text-4xl font-bold mt-10">
              Start working with me today.
            </p>
            <form className="w-full border-b mt-6 flex justify-between py-2">
              <input
                className="bg-transparent outline-none min-w-[170px] w-full text-lime-200"
                type="text"
                placeholder="enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button type="submit"
                onClick={subscribe}
                className="bg-lime-300 px-2 py-1 rounded-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="md:mt-0 mt-10">
            <img
              className="w-[26rem] m-auto"
              src="assets/footer-img.png"
              alt=""
            />
          </div>
        </div>

        <div className="md:flex justify-between items-start">
          <div className="md:mt-0 mt-10">
            <img className="w-[26rem]" src="assets/logo-white.png" alt="" />
            <p className="text-slate-200">
              Design the right web page that move your business
            </p>
          </div>
          <div className="flex gap-20 justify-between">
            <ul className="text-slate-200 leading-10 md:mt-0 mt-10">
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
              <li className="cursor-pointer">Projects</li>
              </Link>
              <Link
                to="hobbies"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
              <li className="cursor-pointer">Hobbies</li>
              </Link>
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
              <li className="cursor-pointer">Reviews</li>
              </Link>
            </ul>
            <ul className="text-slate-200 leading-10 md:mt-0 mt-10">
              <li>Let's chat 👇</li>
              <div className="flex justify-between mt-5">
                <a href="https://www.facebook.com/RohanRay0626/">
                <img className="w-5 sm:w-7" src="assets/facebook.png" alt="" />
                </a>
                <a href="https://www.instagram.com/_rohan_ray_15/">
                  <img className="w-5 sm:w-7" src="assets/instagram.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/pinaki-sankar-ray-9b6530222/">
                <img className="w-5 sm:w-7" src="assets/linkedin.png" alt="" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
