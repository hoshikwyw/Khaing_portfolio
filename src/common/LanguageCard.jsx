import React from 'react'

const LanguageCard = ({ src, text }) => {

  return (
    <div className=' w-[80px] h-[80px] relative rounded-md flex justify-center items-center group cursor-pointer'>
      <img src={src} alt="" className=' transition duration-500 ease-in-out transform group-hover:brightness-50 group-hover:grayscale' />
      <h1 className=' absolute font-bold text-[20px] text-white opacity-0  group-hover:opacity-100 transition-opacity duration-200 ease-in-out'>{text}</h1>
    </div>
  )
}

export default LanguageCard
