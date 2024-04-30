import React, { useContext } from 'react';
import { ThemeContext } from '../redux/ThemeContext';

const Button = (props) => {
    const theme = useContext(ThemeContext)
    const colorClasses = {
        light: {
            blue: 'bg-[#0866FF]',
            grey: 'bg-[#D8DADF]'
        },
        dark: {
            blue: 'bg-[#0866FF]',
            grey: 'bg-[#3A3B3C]'
        }
    }
    const textClasses = {
        light: {
            black: 'text-black',
            white: 'text-white'
        },
        dark: {
            black: 'text-white',
            white: 'text-black'
        }
    }

    const bgColorClasses = colorClasses[theme][props.bgColor];
    const textColorClasses = textClasses[theme][props.textColor];
    const Icon = props.icon;

    return (
        <div className={`mainBtn ${bgColorClasses} py-2 px-3 rounded-lg flex justify-center items-center shadow-md`}>
            {Icon && <Icon className={`mr-2 ${textColorClasses}`} />}
            <h1 className={`btnText font-semibold ${textColorClasses}`}>{props.text}</h1>
        </div>
    )
}

export default Button;
