import React, { useState } from 'react';
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Divisor from './components/divisor';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-slate-200 h-auto flex justify-center w-auto '>
      <div className=' flex flex-col w-4/5'>
        <Nav />
        <Banner />
        <Divisor title="Skills" />
        <Skills />
        <Divisor title="Work" />
        <Work />
        <Divisor title="Contact me" />
        <Contact />
        <Footer />
      </div>
    </div>


  );
};

export default App;
