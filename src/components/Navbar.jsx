import React from 'react'
import logo from '/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { BsImages } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import DarkMode from './DarkMode';

const Navbar = () => {
    return (
        <div className='bg-mainBg-light dark:bg-mainBg-dark w-full h-[56px] px-4 py-1 flex items-center justify-between'>
            <div className=' flex items-center gap-1'>
                <img src={logo} alt="" className=' imgSize' />
            </div>
            <div className=" md:block hidden">
                <div className=" flex items-center gap-1">
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><HiOutlineHome className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Home</span>
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><BsImages className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Projects</span>
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <button><TfiHeadphoneAlt className=' mainIcon' /></button>
                        <span className=' tooltipText md:w-[61px] lg:w-[90px]'>Connect</span>
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-1">
                <div className=" bg-btnBg-light dark:bg-btnBg-dark icon">
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}

export default Navbar
