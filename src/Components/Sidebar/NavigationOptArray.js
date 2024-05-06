import {FaUserLock} from 'react-icons/fa'
import {HiMiniUserGroup} from 'react-icons/hi2'
import {AiFillStar} from 'react-icons/ai'
import {IoMdCloudUpload} from 'react-icons/io'

const options= [
    {
        icon: <FaUserLock/>,
        name: 'My cloud',
        selected: 'true'
    },
    {
        icon: <HiMiniUserGroup/>,
        name: 'Shared file'
    },
    {
        icon: <AiFillStar/>,
        name: 'Favorites'
    },
    {
        icon: <IoMdCloudUpload/>,
        name: 'Upload files'
    },
]

export default options