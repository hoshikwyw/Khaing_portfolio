import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavLink = ({to,text}) => {
    return (
        <NavLink to={to} className=" mainBtn md:w-[61px] lg:w-[112px]">
            {/* <button><icon className=' mainIcon' /> </button> */}
            <span className=' tooltipText md:w-[61px] lg:w-[90px]'>{text}</span>
        </NavLink>

    )
}

export default MainNavLink
