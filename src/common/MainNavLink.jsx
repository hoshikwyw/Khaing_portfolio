import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavLink = ({ to, text, Icon }) => {
    return (
        <NavLink to={to} className=" mainBtn md:w-[61px] lg:w-[112px] flex items-center justify-center">
            <Icon className=' mainIcon' />
            <span className=' tooltipText md:w-[61px] lg:w-[90px] flex items-center justify-center'>{text}</span>
        </NavLink>

    )
}

export default MainNavLink
