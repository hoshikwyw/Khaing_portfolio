import React from 'react'
import SeeMorebtn from '../../../common/commonComponents/SeeMorebtn'
import IntroList from '../../../common/IntroList'
import { IoIosSchool, IoIosHome } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Button from '../../../common/commonComponents/Button';

const IntroExp = () => {
    return (
        <div className=' w-full px-3 py-2 flex flex-col'>
            <div className=' flex w-full justify-between items-center'>
                <h1 className=' subTitle text-gray-500 dark:text-gray-200'>Experience</h1>
                <SeeMorebtn text="See More Details" />
            </div>
            <div className=' flex flex-col gap-3 my-3'>
                <IntroList icon={IoIosSchool} text="Collabration with team" />
                <IntroList icon={IoIosSchool} text="Workshop with Frontend Web Dev Position at MMS-IT" />
                <IntroList icon={IoIosHome} text="Junior Frontend Web Dev at IT-Wizard Myanmar" />
                <IntroList icon={IoIosHome} text="Freelance As Frontend Web Dev at Upwork" />
            </div>
        </div>
    )
}

export default IntroExp
