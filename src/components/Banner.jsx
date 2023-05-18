import React from 'react';
import eu from "../assets/eu.png"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className=" w-full h-auto flex justify-between items-center my-10  ">
      <div className='xl:flex lg:flex md:flex sm:flex sm:flex-col '>
        <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold text-slate-900'>Gabriel Faustino</h1>
        <div className='flex font-bold gap-2'>
          <span className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-slate-900'>I am a</span>
          <TypeAnimation sequence={[
            "Graphic Designer",
            2000,
            "UI Designer",
            2000,
            "Front-end Developer",
            2000,
          ]}
            speed={50}
            className='text-green-500 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base'
            wrapper='span'
            repeat={Infinity}
          />
        </div>

        <p className='h-auto xl:text-base lg:text-base md:text-sm sm:text-sm text-xs font-medium text-gray-700 mt-6'>Hello! I'm Designer from São Paulo, with skills in <b className='text-green-500'>Graphic Design</b>,
          <b className='text-green-500'>UI Design</b>,<br /> and <b className='text-green-500'>Front-end Development</b>. I'm actively seeking opportunities to <br />grow my career.
          Welcome to my portfolio! </p>

      </div>
      <div className='xl:w-auto xl:h-auto lg;h-auto lg:w-auto md:h-auto md:w-auto sm:w-0 sm:h-0 h-0 w-0'>
        <img src={eu} alt="" className='' />
      </div>

    </div>

  )
};

export default Banner;
