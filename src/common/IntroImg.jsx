import React from 'react'

const IntroImg = ({ src, alt, text }) => {
    const containerStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '101px',
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div className=" flex flex-col justify-center items-center">

            <div style={containerStyle} className=' brightness-50'>
            </div>
            <h1 className=' text-gray-500 dark:text-gray-200 font-semibold text-sm tracking-wider pt-2'>{text}</h1>
        </div>
    );
}

export default IntroImg
