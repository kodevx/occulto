import React, { useCallback } from 'react';

interface useAppResult {
    inputText: string,
    encryptedText: string,
    handleInputText: (value: string) => void,
    handleEncryption: (value: string) => void
}

const useApp = (props) : useAppResult => {

    const [inputText, setInputText] = React.useState<string>('');
    const [encryptedText, setEncryptedText] = React.useState<string>('');

    const handleInputText = useCallback(
        (value: string) => setInputText(value), 
        [setInputText]
    );

    const handleEncryption = useCallback(
        (value: string) => {
            try {
                setEncryptedText(value);
            } catch(err) {
                console.log("Encryption Error ",err);
            }
        }, 
        [setEncryptedText]
    );

    return {
        inputText,
        encryptedText,
        handleInputText,
        handleEncryption
    }
}

export default useApp;
