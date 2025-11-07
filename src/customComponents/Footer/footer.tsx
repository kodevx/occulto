import React from 'react';
import { URL_LINK } from '../../constants/constants'
const Footer: React.FC = () => {

    return (
        <div className='flex flex-row justify-center items-center pt-4 font-alan'>
            <a className='flex flex-row items-center' target={'_blank'} href={URL_LINK}>
                <div className='h-3.5 w-3.5 text-xs text-gray-300 border-2 border-gray-300 cursor-pointer rounded-full flex justify-center items-center mr-1'>i</div> 
                <div className='text-gray-300 text-sm'>
                    Caesar cipher
                </div>
            </a>
        </div>
    )
}

export default Footer;
