import React from 'react'
import files from './FilesArray'
import {FaPlus} from 'react-icons/fa'

const FilesPage = () => {
    return (
        <div className='h-[12rem] flex flex-col justify-between'>
            <p className='font-bold text-2xl'>Files</p>
            <div className='w-full flex'>
                <div className='w-[78%] flex justify-between'>
                    {
                        files.map((item) => {
                            return (
                                <div className='w-[12rem] h-[9rem] flex flex-col justify-between bg-white rounded-xl px-[15px] pt-[20px] pb-[12px]'>
                                    <div className='text-2xl' style={{ color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>{item.name}</p>
                                        <p>{item.number} files</p>
                                        <hr className='mt-[20px] w-[60%] mx-auto border-2 rounded-full border-blue-600 opacity-20' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-[12rem] h-[9rem] grid place-items-center bg-white ml-[1.1rem] rounded-xl opacity-70'>
                    <FaPlus className='text-xl'/>
                </div>
            </div>
        </div>
    )
}

export default FilesPage