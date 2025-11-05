// Encrypt Data using Caesar's Cipher Encryption

export const getEncryptedText = (text: string, shift: number) => {
    let encryptedString: string = '';
    
    for(let i = 0; i < text.length; i++) {
        if(
            text.charAt(i).charCodeAt(0) >= 65 && 
            text.charAt(i).charCodeAt(0) <= 90
        ) {
            if(text.charAt(i).charCodeAt(0) + shift > 90) {   // Find the difference incase the ascii code after shifts adds up beyond 90, get the difference and add it from the starting ascii code number
                encryptedString += `${String.fromCharCode(64 + text.charAt(i).charCodeAt(0) + shift - 90)}`;  // eg. x('88') -> a('65'): After shfit of 3, 88 -> 91, so diffrence is 1, add 64 + 1 -> (65) ASCII Code of 'A' 
            } else {
                encryptedString += String.fromCharCode(text.charAt(i).charCodeAt(0) + shift);
            }
        } else if(
            text.charAt(i).charCodeAt(0) >= 97 && 
            text.charAt(i).charCodeAt(0) <= 122
        ) {
            if(text.charAt(i).charCodeAt(0) + shift > 122) {
                encryptedString += `${String.fromCharCode(96 + text.charAt(i).charCodeAt(0) + shift - 122)}`;
            } else {
                encryptedString += `${String.fromCharCode(text.charAt(i).charCodeAt(0) + shift)}`;
            }       
        } else {
            encryptedString += text.charAt(i);
        }
    }

    return encryptedString;
}
