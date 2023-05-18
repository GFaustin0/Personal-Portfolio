import React from 'react';

const Divisor = ({ title }) => {
    return (
        <div className=' h-auto w-auto my-7 flex items-center justify-between'>
            <h1 className='xl:text-5xl lg:text-3xl md:text-3xl text-2xl font-semibold text-slate-900 whitespace-nowrap'>{title}</h1>
            <div className="h-1 bg-slate-400 w-full ml-16 rounded-sm"></div>
        </div>
    )
};

export default Divisor;