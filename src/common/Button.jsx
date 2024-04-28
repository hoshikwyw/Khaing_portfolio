import React from 'react'

const Button = (props) => {
    const colorClasses = {
        blue: 'bg-[#808de0]',
        grey: 'bg-[#737374]'
    }
    const bgColorClasses = colorClasses[props.bgColor]
    return (
        <div className={` mainBtn ${bgColorClasses} py-1 px-3 rounded-lg`}>
            <h1 className=' btnText'>{props.text}</h1>
        </div>
    )
}

export default Button
