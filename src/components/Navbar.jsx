import React from 'react'
import logo from '/public/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import DarkMode from './DarkMode';

const Navbar = () => {
    return (
        <div className='bg-mainBg-light dark:bg-mainBg-dark w-full px-4 py-1 shadow-sm flex items-center justify-between'>
            <div className=' flex items-center'>
                <img src={logo} alt="" className=' imgSize' />
                <div className=' bg-btnBg-light dark:bg-btnBg-dark flex items-center p-2 rounded-full lg:rounded-3xl'>
                    <button><AiOutlineSearch className=' h-[20px] w-[20px] text-greyText-light' /></button>
                    <input type="text" name="search" id="search" className=' bg-transparent hidden lg:block' />
                </div>
            </div>
            <div className=" md:block hidden">
                <div className=" flex items-center gap-1">
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><HiOutlineHome className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><HiOutlineHome className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><HiOutlineHome className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-1">
                <div className=' bg-btnBg-light dark:bg-btnBg-dark icon'>
                    <button><HiOutlineHome className=' innerIcon dark:text-mainText-dark' /></button>
                    <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                </div>
                <div className=' bg-btnBg-light dark:bg-btnBg-dark icon'>
                    <button><HiOutlineHome className=' innerIcon dark:text-mainText-dark' /></button>
                    <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                </div>
                <div className=' bg-btnBg-light dark:bg-btnBg-dark icon'>
                    <button><HiOutlineHome className=' innerIcon dark:text-mainText-dark' /></button>
                    <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                </div>
                <div className=" bg-btnBg-light dark:bg-btnBg-dark icon">
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}

export default Navbar
