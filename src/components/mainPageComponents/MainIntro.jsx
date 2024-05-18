import React, { useEffect, useRef, useState } from 'react'
import AboutIntro from "./mainSubComponents/AboutIntro"
import IntroExp from "./mainSubComponents/IntroExp"
import LanguagesIntro from "./mainSubComponents/LanguagesIntro"
import MainProjects from './mainSubComponents/MainProjects'


const MainIntro = () => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const [leftHeight, setLeftHeight] = useState(0)

    console.log(leftHeight);

    useEffect(() => {
        const updateHeight = () => {
            if (leftRef.current) {
                setLeftHeight(leftRef.current.offsetHeight)
            }
        }
        updateHeight()
        window.addEventListener('resize', updateHeight)
        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    useEffect(() => {
        if (rightRef.current) {
            rightRef.current.style.height = `${leftHeight}px`
        }
    }, [leftHeight])

    return (
        <div className=' lg:w-[900px] md:w-full sm:w-full flex flex-row justify-center gap-10 relative overflow-hidden' ref={rightRef}>
            <div ref={leftRef} className=" lg:w-[40%] md:w-[50%] flex flex-col gap-5 left h-fit">
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
            <div className=' w-[45%] right rounded-md overflow-scroll scroll-smooth snap-center' >
                <MainProjects />
            </div>
        </div>
    )
}

export default MainIntro
