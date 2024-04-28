import React from 'react'
import CoverBg from './CoverBg'

const HeroSection = () => {
  return (
    <div className=' w-full'>
      <div className=' flex justify-center'>
        <div className=" lg:w-[1250px] md:w-full sm:w-full h-full bg-gradient-to-t from-white to-[#242526] dark:from-[#242526] dark:to-white shadow-md dark:shadow-black rounded-2xl">
          <CoverBg />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
