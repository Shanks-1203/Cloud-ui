import {AiFillCamera} from 'react-icons/ai'
import {AiFillAudio} from 'react-icons/ai'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {IoDocumentsSharp} from 'react-icons/io5'

const recentFiles = [
    {
        img:<AiFillCamera/>,
        name: 'IMG_100000',
        type: 'PNG',
        size: '5 MB',
        color: '#6663fe'
    },
    {
        img:<BsFillCameraVideoFill/>,
        name: 'Startup pitch',
        type: 'PNG',
        size: '105 MB',
        color: '#e06c9f'
    },
    {
        img:<AiFillAudio/>,
        name: 'Freestyle beat',
        type: 'PNG',
        size: '21 MB',
        color: '#266fd5'
    },
    {
        img:<IoDocumentsSharp/>,
        name: 'Work proposal',
        type: 'PNG',
        size: '500 KB',
        color: '#00a0b6'
    },
]

export default recentFiles