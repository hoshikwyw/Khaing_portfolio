import React from 'react'
import CustomNavLink from '../../common/CustomNavLink'

const SubNavbar = () => {
    return (
        <div className=' lg:w-[1250px] md:w-full sm:w-full h-full flex gap-14 px-10'>
            <CustomNavLink to='/' text="Intro" />
            <CustomNavLink to='/about' text='About' />
            <CustomNavLink to='/posts' text='Posts' />
            <CustomNavLink to='/videos' text='Videos' />
        </div>
    )
}

export default SubNavbar
