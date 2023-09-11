import React from 'react';
import leftImage from "../images/left-side.jpg";
import { useGlitch } from 'react-powerglitch'

const Hero = () => {
  const glitch = useGlitch();
  return (
    <div className="mainContainer mt-14">
      <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-around px-4 lg:px-20 gap-10">
        <div className="leftSide w-full md:w-1/2 h-[400px] flex justify-center"> {/* Center the image */}
          <img src={leftImage} alt="Left Image" className="w-auto h-auto object-cover" />
        </div>
        <div className="rightSide flex w-full md:w-1/2 flex-col items-center md:items-start">
          <div className="heading font-semibold gap-y-2 text-2xl md:text-4xl text-center md:text-left">
            <p className='text-zinc-100 backdrop-blur-lg text-6xl rounded-3xl'><span ref={glitch.ref}>Welcome to TuringHacX </span></p>
            <p className='text-yellow-500 font-thin mt-5 sm:mx-0 mx-6'><u className='underline-offset-4'>The 
            Innovative First Mega Hackathon</u></p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-10 mt-6 md:mt-10"></div>
    </div>
  );
};

export default Hero;
