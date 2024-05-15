import React from 'react'
import BlueBtn from '../common/commonComponents/BlueBtn'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/")
  }
  return (
    <div className=' w-screen h-screen flex justify-center items-center flex-col'>
      <img src="/errorImg.jpg" alt="" className=' w-[50%]' />
      <div onClick={goBack}>
        <BlueBtn text="Go Back" />
      </div>
    </div>
  )
}

export default Error
