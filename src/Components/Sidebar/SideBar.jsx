import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { TbLogout } from 'react-icons/tb'
import Navigation from './Navigation'

const SideBar = () => {
    return (
        <div className='w-[15%] h-screen bg-[#123870] text-white py-[50px]'>
            <div className='w-full h-full flex flex-col justify-between'>
                <Navigation />
                <div className='flex flex-col pl-[2rem]'>
                    <div className='flex h-[3.4rem] items-center'>
                        <AiFillSetting className='text-3xl' />
                        <p className='ml-[1.5rem] font-bold text-[1.2rem]'>Settings</p>
                    </div>
                    <div className='flex h-[3.4rem] items-center'>
                        <TbLogout className='text-3xl' />
                        <p className='ml-[1.5rem] font-bold text-[1.2rem]'>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar