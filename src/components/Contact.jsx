import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "../App";

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const handleOnSubmit = async (e) =>
  {
    e.preventDefault();

    if(!name || !email || !msg)
    {
      toast.error('Enter all feilds' , {theme:'dark'});
      return;
    }

    toast.warning('Form is submitting' , {
      theme: 'dark'
    })

    try {
      let result = await fetch(`${URL}/api/data` , {
        method: 'post',
        body: JSON.stringify({name , email , msg}),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
  
      result = await result.json();
      console.warn(result);
  
      if(result)
      {
        toast.success('form submitted' , {theme: 'dark'})
        setName("")
        setEmail("")
        setMsg("")
      }
    } catch (error) {
      toast('An error occurred! Please try again later or contact through my Mail ID' , {
        theme: 'dark'
      })
    }
  }

  return (
    <div className="w-full h-fit border lg:p-20 md:p-10 p-5" id="contact">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto">
        <div className="text-[56px] font-bold py-5">
          <h2 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-2xl font-black leading-tight py-5">
            Let's <span className="text-green-600">Partner Up</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 h-fit items-start md:gap-0 gap-10">
          <div className=" max-w-lg max-h-fit">
            <p className="font-bold text-[#6096ba]">
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you
              promptly.
            </p>
            <form className="leading-10 mt-10">
              <label className="font-bold text-[#6096ba]" htmlFor="">
                Your Name
              </label>
              <br />
              <input
                className="bg-[#dbe9ee] h-12 rounded-xl m-1 w-full py-2 px-4"
                type="text"
                placeholder="Allow us to know your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label className="font-bold text-[#6096ba]" htmlFor="">
                Your Email
              </label>
              <br />
              <input
                className="bg-[#dbe9ee] h-12 rounded-xl m-1 w-full py-2 px-4"
                type="email"
                placeholder="Give your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="font-bold text-[#6096ba]" htmlFor="">
                Your message
              </label>
              <br />
              <textarea
                className="bg-[#dbe9ee] h-40 w-full rounded-xl py-2 px-4"
                placeholder="Share your thoughts"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <br />
              <button
                type="submit"
                className="bg-[#6096ba] text-white font-bold rounded-2xl py-1 px-4 mt-4"
                onClick={handleOnSubmit}
              >
                submit
              </button>
            </form>
          </div>

          <div className="h-full md:order-last order-first md:block lg:flex lg:flex-col sm:flex sm:flex-col justify-between items-center gap-3">
            <img
              className="lg:w-[25rem] sm:w-[20rem] md:m-0 m-auto"
              src="assets/email.png"
              alt=""
            />
            <div className="leading-10">
              <div className="flex gap-4 items-baseline">
                <i class="fa-solid fa-location-dot text-[#6096ba]"></i>
                <p className="text-[#597081] font-bold">
                  Cv raman global university , Bhubaneswar , India
                </p>
              </div>
              <div className="flex items-baseline gap-4">
                <i class="fa-solid fa-phone text-[#6096ba]"></i>
                <p className="text-[#597081] font-bold">(91+)7847066316</p>
              </div>
              <div className="flex items-baseline gap-4">
                <i class="fa-solid fa-envelope text-[#6096ba]"></i>
                <p className="text-[#597081] font-bold">
                  pinaki.bpd2001@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
