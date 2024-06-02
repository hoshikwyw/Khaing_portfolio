import React from 'react'
import logo from '/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { BsImages } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import DarkMode from './DarkMode';
import MainNavLink from '../common/MainNavLink';

const Navbar = () => {
    return (
        <div className='bg-mainBg-light dark:bg-mainBg-dark w-full h-[56px] px-4 py-1 flex items-center justify-between'>
            <div className=' flex items-center gap-1'>
                <img src={logo} alt="" className=' imgSize' />
            </div>
            <div className=" md:block hidden">
                <div className=" flex items-center gap-1">
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <MainNavLink text="home" Icon={HiOutlineHome} to="/" />
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <MainNavLink text="Projects" Icon={BsImages} to="/projects" />
                    </div>
                    <div className=" mainBtn md:w-[61px] lg:w-[112px]">
                        <MainNavLink text="Connect" Icon={TfiHeadphoneAlt} to="/connect" />
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
