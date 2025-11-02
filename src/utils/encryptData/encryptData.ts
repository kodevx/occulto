// Encrypt Data using Caesar's Cipher Encryption

export const getEncryptedText = (text: string, shift: number) => {
    let encryptedString: string = '';

    for(let i = 0; i < text.length; i++) {
        if(
            text.charAt(i).charCodeAt(0) >= 65 && 
            text.charAt(i).charCodeAt(0) <= 90
        ) {
            if(text.charAt(i).charCodeAt(0) + shift > 90) {
                encryptedString += `${String.fromCharCode(90 - text.charAt(i).charCodeAt(0) + shift)}`;
            } else {
                encryptedString += String.fromCharCode(text.charAt(i).charCodeAt(0) + shift);
            }
        } else if(
            text.charAt(i).charCodeAt(0) >= 97 && 
            text.charAt(i).charCodeAt(0) <= 122
        ) {
            if(text.charAt(i).charCodeAt(0) + shift > 122) {
                encryptedString += `${String.fromCharCode(122 - text.charAt(i).charCodeAt(0) + shift)}`;
            } else {
                encryptedString += `${String.fromCharCode(text.charAt(i).charCodeAt(0) + shift)}`;
            }       
        } else {
            encryptedString += text.charAt(i);
        }
    }

    return encryptedString;
}
