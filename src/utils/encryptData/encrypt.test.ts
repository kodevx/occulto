import { test, expect } from 'vitest';
import { getEncryptedText } from './encryptData';
import { SHIFT } from '../../constants/constants';

const PLAIN_TEXT = 'Hello there John X!';
const CIPHER_TEXT = 'Khoor wkhuh Mrkq A!';

test(`(${PLAIN_TEXT}) Text Encryption with Shift = ${SHIFT}`, () => {
    expect(
        getEncryptedText(PLAIN_TEXT, SHIFT)
    ).toBe(CIPHER_TEXT)
});
