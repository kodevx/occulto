import { test, expect } from 'vitest';
import { getEncryptedText } from "./encryptData";
import { SHIFT } from '../../constants/constants';

const PLAIN_TEXT = 'Hello there Maria!';
const CIPHER_TEXT = 'Khoor wkhuh Pduld!'

test(`(Hello there Maria!) Text Encryption (Small & Capital Letters) with Shift = ${SHIFT}`, () => {
    expect(
        getEncryptedText(PLAIN_TEXT, SHIFT)
    ).toBe(CIPHER_TEXT)
});
