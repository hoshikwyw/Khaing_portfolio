import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from '../lotties/loading.json';

const Loading = () => {

    return (
        <div className=' w-screen h-screen flex justify-center items-center flex-col'>
            <h1 className=' font-bold text-4xl'>I'm going !! I'm going !! Please Wait ....</h1>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    )
}

export default Loading
