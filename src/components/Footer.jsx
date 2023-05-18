import React from "react";

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-slate-900 flex flex-row justify-between items-center h-auto w-full absolute left-0 px-32 py-10 ga ">
                <h1 className='lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-semibold text-slate-100 '>世界</h1>
                <div className="flex justify-between items-center flex-col spac space-y-6">
                    <p className="text-slate-100 xl:text-base text-xs font-medium">Copyright &copy; Your Website 2023</p>
                    <span className="text-slate-100 xl:text-base text-xs font-medium">Made with ❤️ by Gabriel Faustino</span>
                </div>

            </footer>
        </div>
    )
}
export default Footer;