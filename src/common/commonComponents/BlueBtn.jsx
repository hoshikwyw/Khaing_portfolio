import React from 'react'

const BlueBtn = (props) => {
    const Icon = props.icon;

    return (
        <div className={`mainBtn bg-[#0866FF] py-1 px-3 rounded-lg flex justify-center items-center shadow-md`}>
            {Icon && <Icon className={`mr-2 text-gray-200`} />}
            <h1 className={`btnText font-semibold text-gray-200`}>{props.text}</h1>
        </div>
    )
}

export default BlueBtn
