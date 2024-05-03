import React from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import SubNavbar from './SubNavbar'

const MainHero = () => {
    return (
        <>
            <div>
                <HeroSection />
            </div>
            <div className=" flex justify-center items-center">
                <IntroSection />
            </div>
            <div className=' flex justify-center items-center'>
                <SubNavbar />
            </div>
        </>
    )
}

export default MainHero
