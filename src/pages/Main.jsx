import React from 'react'
import MainIntro from '../components/mainPageComponents/MainIntro'
import MainHero from '../components/mainPageComponents/mainSubComponents/MainHero'

const Main = () => {
  return (
    <div className=''>
      <div className=' bg-gradient-to-t from-white to-[#242526] dark:from-[#242526] dark:to-transparent'>
        <MainHero />
      </div>
      <div className=" dark:bg-black bg-[#F0F2F5] py-10 flex items-center justify-center">
        <MainIntro />
      </div>
    </div>
  )
}

export default Main
