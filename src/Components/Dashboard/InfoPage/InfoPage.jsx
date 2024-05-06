import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import CategoriesPage from './CategoriesPage/CategoriesPage'
import FilesPage from './FilesPage/FilesPage'
import RecentFilesPage from './RecentFiles/RecentFilesPage'

const InfoPage = () => {
    return (
        <div className='h-full flex flex-col'>
            <div className='h-fit'>
                <SearchBar />
            </div>
            <div className='text-blue-800'>
                <CategoriesPage />
                <FilesPage/>
                <RecentFilesPage/>
            </div>
        </div>
    )
}

export default InfoPage