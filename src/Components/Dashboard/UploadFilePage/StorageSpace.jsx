import React from 'react'

const StorageSpace = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <div className='flex justify-between font-bold'>
                <p>Your storage</p>
                <p className='text-cyan-500'>25% left</p>
            </div>
            <div>
                <p className='text-md'>75 GB of 100 GB are used</p>
                <div className='w-full h-[10px] bg-[#c2e2ff] rounded-full mt-[20px]'>
                    <div className='w-[75%] bg-blue-600 h-full rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default StorageSpace