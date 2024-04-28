import React from 'react'

const Button = (props) => {
    const colorClasses = {
        blue: 'bg-[#0866FF]',
        grey: 'bg-[#E4E6EB]'
    }
    const textClasses = {
        black: 'text-black',
        white: 'text-white'
    }
    const bgColorClasses = colorClasses[props.bgColor]
    const textColorClasses = textClasses[props.textColor]
    const Icon = props.icon;

    return (
        <div className={` mainBtn ${bgColorClasses} py-1 px-3 rounded-lg flex justify-center items-center`}>
            {Icon && <Icon className={` mr-2 ${textColorClasses}`} />}
            <h1 className={` btnText font-semibold ${textColorClasses}`}>{props.text}</h1>
        </div>
    )
}

export default Button
