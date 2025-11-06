import React, { useCallback } from 'react';
import { getEncryptedText, getDecryptedText } from '../../utils/encryptUtils';

import { 
    SHIFT, 
    INCREMENT_SHIFT, 
    DECREMENT_SHIFT 
} from '../../constants/constants';

interface useAppResult {
    shift: number
    isBusy: boolean
    inputText: string
    outputText: string
    handleShift: (action: string) => void
    handleInputText: (value: string) => void
    handleEncryption: () => void
    handleDecryption: () => void
}

const useApp = () : useAppResult => {

    const [inputText, setInputText] = React.useState<string>('');
    const [outputText, setOutputText] = React.useState<string>('');

    const [shift, setShift] = React.useState(SHIFT);

    const [isBusy, setIsBusy] = React.useState<boolean>(false);

    const handleInputText = useCallback(
        (value: string) => setInputText(value), 
        [setInputText]
    );

    const handleShift = useCallback(
        (action: string) => {
            if(action === INCREMENT_SHIFT) {
                setShift(prevValue => prevValue + 1);
            } else if(action === DECREMENT_SHIFT) {
                setShift(prevValue => prevValue - 1)
            }
        }, 
        [setShift]
    );

    const handleEncryption = useCallback(
        () => {
            try {
                setIsBusy(true);

                const encryptedText = getEncryptedText(inputText, shift);
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
            shift,
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
        shift,
        isBusy,
        inputText,
        outputText,
        handleShift,
        handleInputText,
        handleEncryption,
        handleDecryption
    }
}

export default useApp;
