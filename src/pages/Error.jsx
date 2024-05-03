import Lottie from 'lottie-react'
import React from 'react'
import errorAnimation from "../lotties/error.json"

const Error = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center flex-col'>
      <h1 className=' font-bold text-8xl'>I'm the error</h1>
      <Lottie animationData={errorAnimation} loop={true} />
    </div>
  )
}

export default Error
