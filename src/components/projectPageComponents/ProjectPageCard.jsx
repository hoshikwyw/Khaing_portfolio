import React from 'react'

const ProjectPageCard = (data) => {
    return (
        <div>
            <div className=' flex justify-center items-center'>
                <img src={data.src} alt="" className=' w-[250px] h-[250px]' />
                <div className="">
                    <h1 className='mainText'>{data.title}</h1>
                    <h1>{data.date}</h1>
                    <p>{data.des}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectPageCard
