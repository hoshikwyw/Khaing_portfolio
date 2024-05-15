import React from 'react'
import MainHero from './mainSubComponents/MainHero'

const MainAbout = () => {
    return (
        <div className=''>
            <div className=' bg-gradient-to-t from-white to-[#242526] dark:from-[#242526] dark:to-transparent'>
                <MainHero />
            </div>
            <div className=" dark:bg-black bg-[#F0F2F5] py-10 flex items-center justify-center">
                <div className=" lg:w-[1250px] md:w-full sm:w-full flex flex-row justify-center gap-20">
                    <h1 className=" font-bold text-3xl text-white">main-about</h1>
                </div>
            </div>
        </div>
    )
}

export default MainAbout
