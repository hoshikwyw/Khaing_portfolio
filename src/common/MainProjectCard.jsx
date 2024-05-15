import React from 'react'
import logo from '/logo.png'
import test from '/hiking.jpg'
import Button from './Button'
import clickBtn from './commonFn'

const MainProjectCard = () => {
    return (
        <div className=' flex flex-col py-3 px-5 dark:bg-[#242526] bg-[#ffffff] rounded-md'>
        
            <div className=" flex w-full justify-start items-center">
                <img src={logo} alt="" className=' w-12 h-12 rounded-full' />
                <div className=" flex flex-col justify-center items-start w-full">
                    <h1 className=' text-black dark:text-white font-semibold'>project name</h1>
                    <h1 className=" text-black dark:text-white font-semibold text-[12px]">12.33.3333</h1>
                </div>
            </div>
            <div className=' border rounded-md '>
                <img src={test} className=' mainCoverImg rounded-t-md' alt="" />
                <p className=' px-5 py-3 text-sm text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic quas libero vel recusandae facere sint excepturi. Inventore consectetur alias autem voluptas corrupti? Temporibus, enim odio! Officia architecto officiis impedit!</p>
            </div>
            <div className=' flex w-full justify-evenly my-5 border-b py-3'>
                <Button text="view details" />
                <Button text="view demo" />
                <Button text="view github" />
            </div>
        </div>
    )
}

export default MainProjectCard
