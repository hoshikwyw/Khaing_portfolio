import React from 'react'
import Button from '../../common/commonComponents/Button'

const ProjectPageCard = (data) => {
    return (
        <div className=' w-[70%] dark:bg-[#242526] bg-[#ffffff] rounded-3xl p-5 text-gray-500 dark:text-gray-200'>
            <div className=' flex justify-center items-center gap-5'>
                <div className=" w-[30%] h-[280px] border-white">
                    <img src={data.src} alt="" className=' w-full h-full' />
                </div>
                <div className=" flex flex-col justify-center items-center w-[70%]">
                    <div className=" ">
                        <h1 className='mainText'>{data.title}</h1>
                        <h1 className='smallText dark:text-[#c1bfbf]'>{data.date}</h1>
                        <p>{data.des}</p>
                    </div>
                    <div className=' flex w-full gap-5 pt-5'>
                        <Button text="view details" />
                        <Button text="view demo" />
                        <Button text="view github repo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPageCard
