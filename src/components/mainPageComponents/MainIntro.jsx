import React from 'react'
import AboutIntro from "./AboutIntro"
import IntroExp from "./IntroExp"
import LanguagesIntro from "./LanguagesIntro"
import MainProjectCard from '../../common/MainProjectCard'


const MainIntro = () => {
    return (

        <div className=' lg:w-[1200px] md:w-full sm:w-full flex flex-row justify-center gap-14'>
            <div className=" lg:w-[40%] md:w-[50%] flex flex-col gap-5">
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
            <div className=' w-[45%]'>
                <MainProjectCard />
            </div>
        </div>
    )
}

export default MainIntro
