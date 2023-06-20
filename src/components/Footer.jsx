import React , {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "../App";
const Footer = () => {

  const [mail, setMail] = useState("")

  const subscribe = async (e) => {
    e.preventDefault()

    toast.warning('Form is submitting' , {
      theme: 'dark'
    })

    let result = await fetch(`${URL}/api/partner` , {
      method: 'post',
      body: JSON.stringify({mail}),
      headers:
      {
        'Content-Type' : 'application/json'
      }
    })

    result = await result.json();
    console.warn(result);

    if(result)
    {
      toast.success('Thanks for suscribing😊 , Contacting you shortly' , {theme: 'dark'})
      setMail("")
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
                className="bg-transparent outline-none w-[300px] text-lime-200"
                type="text"
                placeholder="enter your email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button type="submit"
                onClick={subscribe}
                className="bg-lime-300 px-3 py-1 rounded-md cursor-pointer"
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
          <div className="flex gap-20">
            <ul className="text-slate-200 leading-10 md:mt-0 mt-10">
              <li>Projects</li>
              <li>Hobbies</li>
              <li>Reviews</li>
            </ul>
            <ul className="text-slate-200 leading-10 md:mt-0 mt-10">
              <li>Let's chat</li>
              <li>pinaki.bpd2001@gmail.com</li>
              <div className="flex justify-between">
                <a href="https://www.facebook.com/RohanRay0626/">
                <img className="w-7" src="assets/facebook.png" alt="" />
                </a>
                <a href="https://www.instagram.com/_rohan_ray_15/">
                  <img className="w-7" src="assets/instagram.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/pinaki-sankar-ray-9b6530222/">
                <img className="w-7" src="assets/linkedin.png" alt="" />
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
