import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

export const URL = process.env.REACT_APP_SERVER_URL


function App() {
  return (
    <div className='bg-[#f3f3ff]'>
      <Navbar/>
      <Hero/>
      <Benefits/>
      <Projects/>
      <Achievements/>
      <Hobbies/>
      <Skills/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
