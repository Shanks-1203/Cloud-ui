import React from 'react'
import UploadFile from './UploadFilePage/UploadFile'
import InfoPage from './InfoPage/InfoPage'

const DashboardPage = () => {
  return (
    <div className='w-full flex bg-[#E4F1FF90]'>
        <div className='w-[70%] p-[40px]'>
            <InfoPage/>
        </div>
        <div className='w-[30%] p-[40px]'>
            <UploadFile/>
        </div>
    </div>
  )
}

export default DashboardPage