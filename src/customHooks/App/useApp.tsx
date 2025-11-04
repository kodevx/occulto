import React, { useCallback } from 'react';
import { getEncryptedText } from '../../utils/encryptData';

import { SHIFT } from '../../constants/constants';

interface useAppResult {
    inputText: string
    encryptedText: string
    isEncrypting: boolean
    handleInputText: (value: string) => void
    handleEncryption: () => void
}

const useApp = () : useAppResult => {

    const [inputText, setInputText] = React.useState<string>('');
    const [encryptedText, setEncryptedText] = React.useState<string>('');
    const [isEncrypting, setIsEncrypting] = React.useState<boolean>(false);

    const handleInputText = useCallback(
        (value: string) => setInputText(value), 
        [setInputText]
    );

    const handleEncryption = useCallback(
        () => {
            try {
                setIsEncrypting(true);
                // const encryptedText = getEncryptedText(inputText, SHIFT);
                // setEncryptedText(encryptedText);
            } catch(err) {
                console.log("TextEncryption Error ",err);
            } finally {
                setTimeout(
                    () => setIsEncrypting(false),
                    4000
                );
            }
        }, 
        [
            inputText, 
            setEncryptedText, 
            setIsEncrypting
        ]
    );

    return {
        inputText,
        isEncrypting,
        encryptedText,
        handleInputText,
        handleEncryption
    }
}

export default useApp;
