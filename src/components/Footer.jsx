import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const subscribe = () =>
  {
    toast.error("Not available right now! Sorry" , {theme:"dark"})
  }
  return (
    <div className='w-full h-fit bg-gradient-to-l from-[#0e1c26] via-[#2a454b] to-[#294861] p-3'>
      <ToastContainer closeButton={false}/>
      <div className='md:max-w-[1240px] max-w-[600px] m-auto'>
        <div className='md:flex justify-between'>
         <div>
            <p className='text-lime-200'>Want to build or design something?</p>
            <p className='text-white text-4xl font-bold mt-10'>Start working with me today.</p>
            <form className='w-full border-b mt-6 flex justify-between py-2' >
                <input className='bg-transparent outline-none w-[300px] text-lime-200' type="text" placeholder='enter your email'/>
                <p onClick={subscribe} className='bg-lime-300 px-3 py-1 rounded-md cursor-pointer'>Subscribe</p>
            </form>
         </div>
         <div className='md:mt-0 mt-10'>
            <img className='w-[26rem] m-auto' src="assets/footer-img.png" alt="" />
         </div>
        </div>

        <div className='md:flex justify-between items-start'>
            <div className='md:mt-0 mt-10'>
                <img className='w-[16rem]' src="assets/logo-light.png" alt="" />
                <p className='text-slate-200'>Design the that right web page that move your business</p>
            </div>
            <ul className='text-slate-200 leading-10 md:mt-0 mt-10'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <ul className='text-slate-200 leading-10 md:mt-0 mt-10'>
                <li>Terms & condition</li>
                <li>Privacy</li>
                <li>Cookie Policy</li>
            </ul>
            <ul className='text-slate-200 leading-10 md:mt-0 mt-10'>
                <li>Let's chat</li>
                <li>pinaki.bpd2001@gmail.com</li>
                <div className='flex justify-between'>
                    <img className='w-7' src="assets/facebook.png" alt="" />
                    <img className='w-7' src="assets/instagram.png" alt="" />
                    <img className='w-7' src="assets/linkedin.png" alt="" />
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
