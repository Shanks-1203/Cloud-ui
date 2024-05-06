import {AiFillCamera} from 'react-icons/ai'
import {AiFillAudio} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {IoDocumentsSharp} from 'react-icons/io5'

const categories = [
    {
        icon: <AiFillCamera/>,
        name: 'Pictures',
        number: 480,
        bgColor: '#6663fe',
        star: true
    },
    {
        icon: <IoDocumentsSharp/>,
        name: 'Documents',
        number: 190,
        bgColor:'#00a0b6'
    },
    {
        icon: <BsFillCameraVideoFill/>,
        name: 'Videos',
        number: 30,
        bgColor: '#e06c9f'
    },
    {
        icon: <AiFillAudio/>,
        name: 'Audio',
        number: 80,
        bgColor: '#266fd5'
    },
]

export default categories