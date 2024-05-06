import React from 'react'
import CategoriesComponent from './CategoriesComponent'

const CategoriesPage = () => {
  return (
    <div className=' h-[16rem] flex flex-col justify-evenly'>
        <p className='font-bold text-2xl'>Categories</p>
        <div>
            <CategoriesComponent/>
        </div>
    </div>
  )
}

export default CategoriesPage