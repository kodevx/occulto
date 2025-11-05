import React, { useCallback } from 'react';
import { getEncryptedText, getDecryptedText } from '../../utils/encryptData';

import { SHIFT } from '../../constants/constants';

interface useAppResult {
    inputText: string
    outputText: string
    isBusy: boolean
    handleInputText: (value: string) => void
    handleEncryption: () => void
    handleDecryption: () => void
}

const useApp = () : useAppResult => {

    const [inputText, setInputText] = React.useState<string>('');
    const [outputText, setOutputText] = React.useState<string>('');
    const [isBusy, setIsBusy] = React.useState<boolean>(false);

    const handleInputText = useCallback(
        (value: string) => setInputText(value), 
        [setInputText]
    );

    const handleEncryption = useCallback(
        () => {
            try {
                setIsBusy(true);

                const encryptedText = getEncryptedText(inputText, SHIFT);
                setOutputText(encryptedText);
                
            } catch(err) {
                console.log("TextEncryption Error ",err);
            } finally {
                setTimeout(
                    () => setIsBusy(false),
                    2000
                );
            }
        }, 
        [
            inputText, 
            setOutputText, 
            setIsBusy
        ]
    );

    const handleDecryption = useCallback(
        () => {
            try {
                setIsBusy(true);

                const plainText = getDecryptedText(inputText, SHIFT);
                setOutputText(plainText);
                
            } catch(err) {
                console.log("TextEncryption Error ",err);
            } finally {
                setTimeout(
                    () => setIsBusy(false),
                    2000
                );
            }
        }, 
        [
            inputText, 
            setOutputText, 
            setIsBusy
        ]
    );

    return {
        inputText,
        isBusy,
        outputText,
        handleInputText,
        handleEncryption,
        handleDecryption
    }
}

export default useApp;
