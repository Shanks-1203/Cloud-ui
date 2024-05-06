import React from 'react'
import options from './NavigationOptArray'
import shankar from '../../Assets/Shankar.jpeg'

const Navigation = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[6rem] h-[6rem] rounded-full bg-red-500 mb-[2.5rem]'>
                <img src={shankar} alt="Profile" className='h-[6rem] rounded-full bg-cover' />
            </div>
            <div className='flex flex-col w-full'>
                {options.map((item) => {
                    return (
                        <div className='flex h-[3.4rem] items-center pl-[2rem]' style={{backgroundColor:item.selected?'rgb(23 37 84 / var(--tw-bg-opacity))' : null}}>
                            <div className='text-3xl'>
                                {item.icon}
                            </div>
                            <p className='ml-[1.5rem] font-bold text-[1.2rem]'>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation