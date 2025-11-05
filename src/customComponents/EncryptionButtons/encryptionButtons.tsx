import React from 'react';
import Button from '../../components/Button';

import LockIcon from '../../assets/lock.png';
import UnlockIcon from '../..//assets/unlock.png';

interface EncryptionButtonsProps {
    isBusy: boolean
    handleEncryption: () => void
    handleDecryption: () => void
}

const EncryptionButtons: React.FC<EncryptionButtonsProps> = (props) => {

    const { 
      isBusy,
      handleEncryption, 
      handleDecryption 
    } = props;

    return (
          <div className='ml-4 flex flex-row justify-center items-center absolute right-1 top-1'>
            <Button onClick={handleEncryption} disabled={isBusy} styles={'h-13 w-13 z-4 flex flex-row transition delay-50 ease-out duration-300 hover:bg-red-300 hover:scale-125 active:scale-75 active:bg-red-400 justify-center items-center cursor-pointer rounded-full disabled:opacity-60 disabled:cursor-not-allowed'}>
              <img 
                src={LockIcon} 
                className={'h-7 w-7'} 
                alt={'lock-icon'} 
              />
            </Button>
            <span className='border-2 border-gray-300 h-6 w-0 rotate-12'/>
            <Button onClick={handleDecryption} disabled={isBusy} styles={'h-13 w-13 flex flex-row transition delay-50 duration-300 ease-out hover:bg-green-300 hover:scale-125 active:scale-75 active:bg-green-400 justify-center items-center rounded-full disabled:opacity-60 disabled:cursor-not-allowed'}>
              <img 
                src={UnlockIcon} 
                className={'h-7 w-7'} 
                alt={'lock-icon'} 
              />
            </Button> 
          </div>
    )
}

export default EncryptionButtons;
