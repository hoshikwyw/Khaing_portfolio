import React from 'react'
import CoverBg from './CoverBg'

const HeroSection = () => {
  return (
    <div className=' w-full'>
      <div className=' flex justify-center'>
        <div className=" lg:w-[1050px] md:w-full sm:w-full h-full bg-gradient-to-b from-white to-[#242526] dark:from-[#242526] dark:to-white shadow-md shadow-slate-800 dark:shadow-gray-400 rounded-b-2xl">
          <CoverBg />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
