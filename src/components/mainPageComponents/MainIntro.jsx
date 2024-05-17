import React, { useEffect, useRef } from 'react'
import AboutIntro from "./mainSubComponents/AboutIntro"
import IntroExp from "./mainSubComponents/IntroExp"
import LanguagesIntro from "./mainSubComponents/LanguagesIntro"
import MainProjects from './mainSubComponents/MainProjects'


const MainIntro = () => {
    // const leftRef = useRef();
    // const rightRef = useRef();

    // useEffect(() => {
    //     const handleScroll = (e) => {
    //         if (rightRef.current.scrollHeight - rightRef.current.scrollTop === rightRef.current.clientHeight) {
    //             // Scroll has reached the bottom of the right container
    //             leftRef.current.style.overflowY = 'auto';
    //         } else {
    //             leftRef.current.style.overflowY = 'hidden';
    //         }
    //     }
    //     rightRef.current.addEventListener('scroll', handleScroll);
    //     return () => {
    //         if (rightRef.current) {
    //             rightRef.current.removeEventListener('scroll', handleScroll);
    //         }
    //     }
    // }, []);

    return (
        <div className=' lg:w-[1200px] md:w-full sm:w-full flex flex-row justify-center gap-14'>
            <div className=" lg:w-[40%] md:w-[50%] flex flex-col gap-5 left">
                <div className=' w-full dark:bg-[#242526] bg-[#ffffff] rounded-md'>
                    <AboutIntro />
                </div>
                <div className=" w-full dark:bg-[#242526] bg-[#ffffff] rounded-md">
                    <IntroExp />
                </div>
                <div className=" w-full dark:bg-[#242526] bg-[#ffffff] rounded-md">
                    <LanguagesIntro />
                </div>
            </div>
            <div className=' w-[45%] right' >
                <MainProjects />
            </div>
        </div>
    )
}

export default MainIntro
