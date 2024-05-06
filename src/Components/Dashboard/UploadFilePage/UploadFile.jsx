import React from 'react'
import {FaUpload} from 'react-icons/fa'
import StorageSpace from './StorageSpace'
import SharedFolders from './SharedFolders'

const UploadFile = () => {
  return (
    <div className='h-[100%] rounded-3xl bg-white flex flex-col justify-between p-[25px] text-blue-800 shadow-lg'>
        <div className='bg-[#E4F1FF90] h-[40%] rounded-xl flex flex-col items-center justify-center'>
            <FaUpload className='text-[2.5rem] text-blue-600'/>
            <p className='mt-[2rem] font-bold'>Add new files</p>
        </div>
        <div className='bg-[#E4F1FF90] h-[16%] rounded-xl px-[15px] py-[20px]'>
            <StorageSpace/>
        </div>
        <div className='bg-[#E4F1FF90] h-[40%] rounded-xl p-[20px]'>
            <SharedFolders/>
        </div>
    </div>
  )
}

export default UploadFile