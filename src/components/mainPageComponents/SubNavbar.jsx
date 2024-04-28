import React from 'react'
import CustomNavLink from '../../common/CustomNavLink'

const SubNavbar = () => {
    return (
        <div className=' lg:w-[1250px] md:w-full sm:w-full h-full flex gap-14 px-10 py-5'>
            <CustomNavLink to='/about' text='About' />
            <CustomNavLink to='/posts' text='Posts' />
            <CustomNavLink to='/project' text='Projects' />
            <CustomNavLink to='/contact' text='Contact' />
        </div>
    )
}

export default SubNavbar
