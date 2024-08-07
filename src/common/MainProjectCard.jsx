import React from 'react'
import logo from '/logo.png'
import test from '/hiking.jpg'
import Button from './commonComponents/Button'

const MainProjectCard = (data) => {
    console.log(data);
    return (
        <div className=' flex flex-col p-5 dark:bg-[#242526] bg-[#ffffff] rounded-md'>
            <div className=" flex w-full justify-start items-center pb-2 gap-3">
                <img src={data.src} alt="" className=' w-12 h-12 rounded-full' />
                <div className=" flex flex-col justify-center items-start w-full">
                    <h1 className=' text-black dark:text-white font-semibold'>{data.title}</h1>
                    <h1 className=" text-black dark:text-white font-semibold text-[12px]">{data.date}</h1>
                </div>
            </div>
            <div className=' border rounded-md w-full overflow-hidden'>
                <img src={test} className=' mainCoverImg rounded-t-md' alt="" />
                <p className=' px-5 py-5 smallText text-black dark:text-white break-words'>{data.des}</p>
            </div>
            <div className=' flex w-full justify-evenly pt-3'>
                <Button text="view details" />
                <Button text="view demo" />
                <Button text="view github repo" />
            </div>
        </div>
    )
}

export default MainProjectCard
