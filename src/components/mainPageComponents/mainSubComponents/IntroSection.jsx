import React from 'react'
import Button from '../../../common/commonComponents/Button'
import { GiConversation } from "react-icons/gi";
import { GrDocumentDownload } from "react-icons/gr";
import BlueBtn from '../../../common/commonComponents/BlueBtn';

const IntroSection = () => {
    return (
        <div className=' lg:w-[1050px] md:w-full sm:w-full h-full flex gap-10 justify-between border-b-2 border-[#B0B3B3] dark:border-[#65676B] px-3'>
            <div className="img w-[20%] h-[150px] relative">
                <img src="/pfp.png" alt="" className=' w-[190px] h-[190px] rounded-full absolute -top-20 border bg-white' />
            </div>
            <div className="text w-[40%] flex flex-col justify-center dark:text-white">
                <h1 className=' mainText'>Khaing Wut Yi Win</h1>
                <h1 className=' smallText dark:text-[#c1bfbf]'>1year experience</h1>
                <h1 className=' subTitle'>Frontend Developer</h1>
            </div>
            <div className=' buttons w-[40%] flex items-end pb-10 gap-10 justify-end'>
                <BlueBtn text="Get My Resume" bgColor="blue" icon={GrDocumentDownload} textColor="white" />
                <Button text="Contact With Me" bgColor="grey" icon={GiConversation} textColor="black" />
            </div>
        </div>
    )
}

export default IntroSection
