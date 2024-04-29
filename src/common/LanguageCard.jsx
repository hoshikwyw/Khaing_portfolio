import React from 'react'

const LanguageCard = ({ src, text }) => {
  console.log(src);
  return (
    <div className=' w-[100px] h-[120px] bg-[#7E8080] dark:bg-[#CBCCCC] relative rounded-md'>
      <img src={src} alt="" className=' w-full h-full' />
      <h1 className=' absolute'>{text}</h1>
    </div>
  )
}

export default LanguageCard
