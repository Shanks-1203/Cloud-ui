import {FaServer} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {BiSolidBox} from 'react-icons/bi'

const files = [
    {
        icon: <FaServer/>,
        name: 'Work',
        number: 820,
        color: '#6663fe'
    },
    {
        icon: <FaUserAlt/>,
        name: 'Personal',
        number: 115,
        color: '#00a0b6'
    },
    {
        icon:<FaGraduationCap className='scale-125 ml-[5px]'/>,
        name: 'School',
        number: 65,
        color: '#e06c9f'
    },
    {
        icon: <BiSolidBox/>,
        name: 'Archive',
        number: 21,
        color: '#266fd5'
    },
]

export default files