import React from 'react'
import {HiSearch} from 'react-icons/hi'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='w-full h-[3.5rem] rounded-full bg-white shadow-sm flex items-center px-[25px]'>
        <HiSearch className='text-[1.6rem] opacity-30 text-blue-600'/>
        <input type="text" placeholder='Search' className='w-full h-full p-[10px] text-lg outline-none'/>
    </div>
  )
}

export default SearchBar