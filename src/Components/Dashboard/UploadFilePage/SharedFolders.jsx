import React from 'react'
import folders from './SharedFoldersArray'

const SharedFolders = () => {
    return (
        <div className='h-full flex flex-col justify-between'>
            <p className='font-bold'>Your shared folders</p>
            {folders.map((item) => {
                return (
                    <div className='w-full h-[3.5rem] rounded-xl flex items-center justify-between px-[15px] relative' style={{backgroundColor:item.bgColor}}>
                        <p className='text-[0.95rem] font-bold'>{item.name}</p>
                        {item.secondaryImg?<div className='w-[2.8rem] h-[2.8rem] rounded-full grid place-items-center bg-white absolute right-11'>
                            <img src={item.secondaryImg} alt="User Image" className='h-[2.5rem] rounded-full'/>
                        </div>: null}
                        <div className='w-[2.8rem] h-[2.8rem] rounded-full grid place-items-center bg-white relative'>
                            <img src={item.primaryImg} alt="User Image" className='h-[2.5rem] rounded-full'/>
                        </div>
                    </div>
                )
            })
            }
            <div className='w-full h-[3rem] grid place-items-center rounded-lg border-blue-600 border-[1px] opacity-30'>
                <p>+ Add more</p>
            </div>

        </div>
    )
}

export default SharedFolders