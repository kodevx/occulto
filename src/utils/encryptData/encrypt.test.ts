import { test, expect } from 'vitest';
import { getEncryptedText, getDecryptedText } from './encryptData';
import { SHIFT } from '../../constants/constants';

const PLAIN_TEXT = 'Hello there John X!';
const CIPHER_TEXT = 'Khoor wkhuh Mrkq A!';

test(`(${PLAIN_TEXT}) Text Encryption with Shift = ${SHIFT}`, () => {
    expect(
        getEncryptedText(PLAIN_TEXT, SHIFT)
    ).toBe(CIPHER_TEXT)
});

test(`(${CIPHER_TEXT}) Text Decrypted with Shift = ${SHIFT}`, () => {
    expect(
        getDecryptedText(CIPHER_TEXT, SHIFT)
    ).toBe(PLAIN_TEXT)
});
