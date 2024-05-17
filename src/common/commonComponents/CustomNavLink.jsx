import React from 'react'
import { NavLink } from 'react-router-dom'
import './navLink.css'

const CustomNavLink = ({ to, text }) => {
    const activeLink = ' text-blue-400 border-b-2 border-blue-400 py-3'
    const normalLink = ' text-black dark:text-white py-3'
    return (
        <NavLink to={to} activeclassname='active' className={({ isActive }) => isActive ? activeLink : normalLink}>
            <h1 className=' subNavText'>{text}</h1>
        </NavLink>
    )
}

export default CustomNavLink
