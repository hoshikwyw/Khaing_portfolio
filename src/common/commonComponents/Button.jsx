import React from 'react';
import clickBtn from '../commonFn';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const navigate = useNavigate()
    const Icon = props.icon;
    const text = props.text;
    const path = props.path;


    return (
        <button className={`mainBtn bg-[#D8DADF] dark:bg-[#3A3B3C] py-2 px-3 rounded-lg flex justify-center items-center shadow-md`} onClick={() => clickBtn(text, path , navigate)}>
            {Icon && <Icon className={`mr-2 text-black dark:text-white`} />}
            <h1 className={`btnText font-semibold text-black dark:text-white`}>{text}</h1>
        </button>
    )
}

export default Button;
