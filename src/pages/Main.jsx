import React from 'react'
import HeroSection from '../components/mainPageComponents/HeroSection'
import IntroSection from '../components/mainPageComponents/IntroSection'
import SubNavbar from '../components/mainPageComponents/SubNavbar'

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
        <div className=''>
          <SubNavbar />
        </div>
      </div>
      <div className=" w-full dark:bg-black bg-[#F0F2F5] flex justify-center py-10">
        <div className=' lg:w-[1250px] md:w-full sm:w-full h-[500px] dark:bg-[#242526] bg-[#ffffff]'>
          <p className=' dark:text-[#B0B3B3]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur libero autem provident, obcaecati aut fuga, natus placeat omnis commodi neque, in fugit expedita temporibus dolorem! Asperiores quam provident aut aspernatur.</p>
        </div>
      </div>
    </div>
  )
}

export default Main
