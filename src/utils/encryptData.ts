// Encrypt Data using Caesar's Cipher Encryption
import { SHIFT } from '../constants/constants';

const getEncryptedText = (textArray: string[], shift: number) => {
    const encryptedArray: string[] = [];

    textArray.map(character => {
        if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
            if(character.charCodeAt(0) + shift > 90) {
                encryptedArray.push(
                    String.fromCharCode(90 - character.charCodeAt(0) + shift)
                )
            } else {
                encryptedArray.push(
                    String.fromCharCode(
                        character.charCodeAt(0) + shift
                    )
                )
            }
        } else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
            if(character.charCodeAt(0) + shift > 122) {
                encryptedArray.push(
                    String.fromCharCode(122 - character.charCodeAt(0) + shift)
                )
            } else {
                encryptedArray.push(
                    String.fromCharCode(
                        character.charCodeAt(0) + shift
                    )
                )
            }       
        } else {
            encryptedArray.push(character);
        }
    });

    return encryptedArray.join();
}

const EncryptData = (text: string) => {
    const textArray = text.split("");

    const encryptText = getEncryptedText(textArray, SHIFT);

    return encryptText;
}

export default EncryptData;
