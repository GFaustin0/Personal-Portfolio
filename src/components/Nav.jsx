import React from 'react';
import { SiLinkedin, SiGithub, } from "react-icons/si"
import { FaBehanceSquare } from "react-icons/fa"


const Nav = () => {
  return (

    <nav className=" items-center flex w-full h-14 justify-between mt-6">
      <h1 className='text-xl font-semibold text-slate-900 '>世界</h1>
      <ul className="flex space-x-5">

        <a href="https://www.linkedin.com/in/david-gabriel-faustino-lopez-8b084620b/" target="_blank" rel="">
          <li>
            <SiLinkedin color="#0f172a" size={24} />
          </li>
        </a>

        <a href="https://github.com/GFaustin0" target="_blank" rel="">
          <li>
            <SiGithub color="#0f172a" size={24} />
          </li>
        </a>

        <a href="https://www.behance.net/GabrielNulo" target="_blank" rel="">
          <li>
            <FaBehanceSquare color="#0f172a" size={26} />
          </li>
        </a>

      </ul>
    </nav>



  )
};

export default Nav;
