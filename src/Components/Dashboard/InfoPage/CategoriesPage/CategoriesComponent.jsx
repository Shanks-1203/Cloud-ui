import React from 'react'
import categories from './CategoriesArrays'
import { AiFillStar } from 'react-icons/ai'

const CategoriesComponent = () => {
    return (
        <div className='w-[78%] flex justify-between'>

            {
                categories.map((item) => {
                    return (
                        <div className='w-[12rem] h-[10rem] rounded-xl flex flex-col justify-between text-white p-[20px]' style={{ backgroundColor: item.bgColor }}>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-[3rem] h-[3rem] rounded-full p-[5px] bg-white grid place-items-center text-2xl' style={{ color: item.bgColor }}>
                                    {item.icon}

                                </div>
                                <div className='text-3xl text-yellow-200'>
                                    {item.star ? <AiFillStar /> : null}
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>{item.name}</p>
                                <p>{item.number} files</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoriesComponent