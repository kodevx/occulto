import React, { useCallback } from 'react';
import { getEncryptedText } from '../../utils/encryptData';

import { SHIFT } from '../../constants/constants';

interface useAppResult {
    inputText: string,
    encryptedText: string,
    handleInputText: (value: string) => void,
    handleEncryption: () => void
}

const useApp = () : useAppResult => {

    const [inputText, setInputText] = React.useState<string>('');
    const [encryptedText, setEncryptedText] = React.useState<string>('');

    const handleInputText = useCallback(
        (value: string) => setInputText(value), 
        [setInputText]
    );

    const handleEncryption = useCallback(
        () => {
            try {
                // const encryptedText = getEncryptedText(inputText, SHIFT);
                // setEncryptedText(encryptedText);
            } catch(err) {
                console.log("TextEncryption Error ",err);
            }
        }, 
        [inputText, setEncryptedText]
    );

    return {
        inputText,
        encryptedText,
        handleInputText,
        handleEncryption
    }
}

export default useApp;
