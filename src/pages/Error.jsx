import Lottie from 'lottie-react'
import React from 'react'
import errorAnimation from "../lotties/error.json"

const Error = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center flex-col'>
      {/* <Lottie animationData={errorAnimation} loop={true} /> */}
      <img src="/errorImg.jpg" alt="" className=' w-[50%]' />
    </div>
  )
}

export default Error
