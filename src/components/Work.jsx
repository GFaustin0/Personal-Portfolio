import React from 'react';
import Expo from "../assets/expoProject.png"
import Tilty from 'react-tilty';

const Work = () => {
  return (
    <div className='h-auto w-auto xl:flex items-center xl:justify-between md:justify-center sm:justify-center md:flex-wrap sm:flex-wrap xl:space-x-0 xl:my-32 md:my-24 sm:my-14'>

      <a href="https://www.behance.net/gallery/156418503/Expo-Projetc" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center hover:scale-110 transition-all cursor-pointer mb-8 sm:mb-10 lg:mb-0'>
        <Tilty className='flex flex-col justify-center items-center' glare maxGlare={0.1}>
          <div className="h-28 w-48 sm:h-36 sm:w-56 md:h-44 md:w-72 lg:h-44 lg:w-92 xl:h-56 xl:w-96 bg-slate-400  rounded-xl shadow-xl ">
            <img src={Expo} alt="" className='h-full w-full rounded-xl' />
          </div>
          <span className='mt-2 text-slate-900 font-medium text-base sm:text-lg md:text-xl'>Expo Project</span>
        </Tilty>
      </a>

      <a href="https://www.behance.net/GabrielNulo" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center hover:scale-110 transition-all cursor-pointer mb-8 sm:mb-10 lg:mb-0'>
        <Tilty className='flex flex-col justify-center items-center' glare maxGlare={0.1}>
          <div className="h-28 w-48 sm:h-36 sm:w-56 md:h-44 md:w-72 lg:h-44 lg:w-92 xl:h-56 xl:w-96 bg-slate-400  rounded-xl shadow-xl flex justify-center items-center ">
            <span className='font-semibold text-base sm:text-lg md:text-xl'>Coming Soon</span>
          </div>
          <span className='mt-2 text-slate-900 font-medium text-base sm:text-lg md:text-xl'>{"<undefined/>"}</span>
        </Tilty>
      </a>

      <a href="https://www.behance.net/GabrielNulo" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center hover:scale-110 transition-all cursor-pointer mb-8 sm:mb-10 lg:mb-0 '>
        <Tilty className='flex flex-col justify-center items-center' glare maxGlare={0.1}>
          <div className="h-28 w-48 sm:h-36 sm:w-56 md:h-44 md:w-72 lg:h-44 lg:w-92 xl:h-56 xl:w-96 bg-slate-400  rounded-xl shadow-xl flex justify-center items-center ">
            <span className='font-semibold text-base sm:text-lg md:text-xl'>Coming Soon</span>
          </div>
          <span className='mt-2 text-slate-900 font-medium text-base sm:text-lg md:text-xl'>{"<undefined/>"}</span>
        </Tilty>
      </a>

    </div>
  )
};

export default Work;
