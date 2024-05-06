import React from 'react'
import recentFiles from './RecentFilesArray'
import {FaShareAlt} from 'react-icons/fa'
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const RecentFilesPage = () => {
  return (
    <div className='h-[22.7rem] flex flex-col justify-evenly'>
       <p className='text-2xl font-bold mt-[20px] mb-[15px]'>Recent Files</p>
        <div className='w-full h-full flex flex-col justify-between'>
            {
                recentFiles.map((item)=>{
                    return(
                        <div className='w-full h-[4.1rem] rounded-xl bg-white flex justify-between p-[10px] items-center'>
                            <div className='w-[3rem] h-[3rem] rounded-xl grid place-items-center text-2xl text-white' style={{backgroundColor:item.color}}>
                                {item.img}
                            </div>
                            <div className='font-bold text-black'>
                                {item.name}
                            </div>
                            <div className='text-black opacity-50 font-medium'>
                                {item.type} file
                            </div>
                            <div className='text-black opacity-50 font-medium'>
                                {item.size}
                            </div>
                            <FaShareAlt className='text-blue-600 text-xl'/>
                            <BiDotsHorizontalRounded className='text-blue-600 opacity-50 text-3xl'/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default RecentFilesPage