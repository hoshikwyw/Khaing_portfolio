import React from 'react'
import HeroSection from '../components/mainPageComponents/HeroSection'
import IntroSection from '../components/mainPageComponents/IntroSection'
import SubNavbar from '../components/mainPageComponents/SubNavbar'

const Main = () => {
  return (
    <div className=''>
      <div>
        <HeroSection />
      </div>
      <div className=" flex justify-center items-center">
        <IntroSection />
      </div>
      <div>
        <SubNavbar />
      </div>
    </div>
  )
}

export default Main
