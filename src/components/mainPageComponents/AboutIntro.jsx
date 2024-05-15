import React from 'react'
import Button from '../../common/Button'
import IntroList from '../../common/IntroList'
import { IoIosSchool, IoIosHome } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import IntroImg from '../../common/IntroImg';

const AboutIntro = () => {
    return (
        <div className=' w-full px-3 py-2'>
            <h1 className=' subTitle text-gray-500 dark:text-gray-200'>Intro</h1>
            <div className=' flex flex-col gap-2'>
                <div className=' flex flex-col gap-2 py-2'>
                    <h1 className=' w-full text-center font-serif text-gray-500 dark:text-gray-200'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni" </h1>
                    <Button text='View My fav quotes' bgColor='grey' />
                </div>
                <div className=' flex flex-col gap-2'>
                    <IntroList icon={IoIosSchool} text="Studied at MMS One Stop IT Solutions" />
                    <IntroList icon={IoIosSchool} text="Went to R.N.E.C Private High School" />
                    <IntroList icon={IoIosHome} text="Lives in Shwe Pyi Thar Township" />
                    <IntroList icon={IoLocationSharp} text="From Yangon" />
                    <Button text='View More Info' bgColor='grey' />
                </div>
                <div className=" flex flex-col gap-4 pt-2">
                    <div className=" flex gap-2">
                        <IntroImg src='/hiking.jpg' text='Hiking' />
                        <IntroImg src='/coding.jpg' text='Coding' />
                        <IntroImg src='/listening.jpg' text='Listening' />
                    </div>
                    <Button text='View More Hobby' bgColor='grey' />
                </div>
            </div>
        </div>
    )
}

export default AboutIntro
