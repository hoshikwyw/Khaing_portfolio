import React from 'react'
import HeroSection from '../components/mainPageComponents/HeroSection'
import IntroSection from '../components/mainPageComponents/IntroSection'
import SubNavbar from '../components/mainPageComponents/SubNavbar'
import AboutIntro from '../components/mainPageComponents/AboutIntro'
import LanguagesIntro from '../components/mainPageComponents/LanguagesIntro'
import IntroExp from '../components/mainPageComponents/IntroExp'

const Main = () => {
  return (
    <div className=''>
      <div className=' bg-gradient-to-t from-white to-[#242526] dark:from-[#242526] dark:to-transparent'>
        <div>
          <HeroSection />
        </div>
        <div className=" flex justify-center items-center">
          <IntroSection />
        </div>
        <div className=' flex justify-center items-center'>
          <SubNavbar />
        </div>
      </div>
      <div className=" dark:bg-black bg-[#F0F2F5] py-10 flex items-center justify-center">
        <div className=' lg:w-[1250px] md:w-full sm:w-full flex flex-row justify-center gap-20'>
          <div className=" w-[30%] flex flex-col gap-5">
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
          <div className=' w-[65%] dark:bg-[#242526] bg-[#ffffff] rounded-md'>
            <AboutIntro />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
