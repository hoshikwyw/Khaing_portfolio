import React from 'react'
import HeroSection from '../components/mainPageComponents/mainSubComponents/HeroSection'

const Connect = () => {
  return (
    <div className=' w-full min-h-screen flex flex-col items-center'>
      <div className=' w-full h-full bg-gradient-to-t from-white to-[#242526] dark:from-[#242526] dark:to-transparent flex justify-center items-center py-10'>
        <div className=" lg:w-[1050px] md:w-full sm:w-full h-[320px] flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-white to-[#242526] dark:from-[#242526] dark:to-white shadow-md shadow-slate-800 dark:shadow-gray-400 rounded-b-2xl">
          <h1 className=' mainText'>Get in touch with me ! </h1>
        </div>
      </div>
      <div className=" dark:bg-black min-h-screen w-full bg-[#F0F2F5] py-10 flex items-center justify-center">
        <h1>hello world</h1>
      </div>
    </div>
  )
}

export default Connect
