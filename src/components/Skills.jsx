import React from 'react';
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript, } from "react-icons/di"
import { SiTailwindcss, SiAdobephotoshop, SiFigma } from "react-icons/si"

const Skills = () => {
  return (
    <section className='h-auto w-auto flex flex-col justify-between md:justify-center items-center  sm:my-7 md:my-10 lg:my-20 md:space-y-5 lg:space-y-20 '>
      <div className=''>
        <ul className='flex flex-wrap justify-center items-center h-auto w-auto scale-75 sm:scale-auto md:scale-105 lg:scale-125 space-x-3 spac'>
          <li>
            <FaHtml5 className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={100} />
          </li>

          <li>
            <FaCss3Alt className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={100} />
          </li>

          <li >
            <DiJavascript className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={108} />
          </li>

          <li>
            <FaReact className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={100} />
          </li>

          <li>
            <SiTailwindcss className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={100} />
          </li>
        </ul>
      </div>

      <div className=''>
        <ul className='flex justify-center items-center h-auto w-auto scale-75 sm:scale-auto md:scale-105 lg:scale-125 space-x-6 '>
          <li>
            <SiAdobephotoshop className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={85} />
          </li>

          <li>
            <SiFigma className='hover:scale-125  transition-all' color='#94a3b8'
              onMouseOver={({ target }) => target.style.color = "#22c55e"}
              onMouseOut={({ target }) => target.style.color = "#94a3b8"}
              size={90} />
          </li>

        </ul>
      </div>

    </section>
  )
};

export default Skills;
