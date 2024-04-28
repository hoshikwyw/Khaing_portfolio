import React from 'react'
import { NavLink } from 'react-router-dom'
import './navLink.css'

const CustomNavLink = ({ to, text }) => {
    return (
        <NavLink to={to} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} activeClassName='active'>
            <h1 className=' subNavText dark:text-[#c1bfbf]'>{text}</h1>
        </NavLink>
    )
}

export default CustomNavLink
