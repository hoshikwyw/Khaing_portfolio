import React from 'react'

const IntroList = ({ icon: Icon, text }) => {
    return (
        <div className=' flex items-center gap-2'>
            {Icon && <Icon className=' text-lg text-gray-500 dark:text-gray-200' />}
            <h1 className=' text-gray-500 dark:text-gray-200'>{text}</h1>
        </div>
    )
}

export default IntroList
