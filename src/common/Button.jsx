import React from 'react';
import clickBtn from './commonFn';

const Button = (props) => {

    const Icon = props.icon;

    return (
        <button className={`mainBtn bg-[#D8DADF] dark:bg-[#3A3B3C] py-2 px-3 rounded-lg flex justify-center items-center shadow-md`} >
            {Icon && <Icon className={`mr-2 text-black dark:text-white`} />}
            <h1 className={`btnText font-semibold text-black dark:text-white`}>{props.text}</h1>
        </button>
    )
}

export default Button;
