
const assert = require('assert');
const {
    isEmpty,
    isStrongPassword,
    isEmail,
    isAlpha,
    isAlphanumeric
} = require('./main.js');

describe('Validator Functions', () => {
    describe('isEmpty', () => {
        it('should return true for an empty string', () => {
            assert.strictEqual(isEmpty(''), true);
        });

        it('should return false for a non-empty string', () => {
            assert.strictEqual(isEmpty('abc'), false);
        });
    });

    describe('isStrongPassword', () => {
        it('should return true for a strong password', () => {
            assert.strictEqual(isStrongPassword('StrongP@ssw0rd'), true);
        });

        it('should return false for a weak password', () => {
            assert.strictEqual(isStrongPassword('weakpassword'), false);
        });

        it('should return true for a password with multiple special characters', () => {
            assert.strictEqual(isStrongPassword('StrongPass!@#'), true);
        });
    
        it('should return false for a password without special characters', () => {
            assert.strictEqual(isStrongPassword('WeakPassword123'), false);
        });
    });

    describe('isEmail', () => {
        it('should return true for a valid email address', () => {
            assert.strictEqual(isEmail('test@example.com'), true);
        });

        it('should return false for an invalid email address', () => {
            assert.strictEqual(isEmail('notanemail'), false);
        });
    });

    describe('isAlpha', () => {
        it('should return true for a string containing only alphabetic characters', () => {
            assert.strictEqual(isAlpha('abcdef'), true);
        });

        it('should return false for a string containing non-alphabetic characters', () => {
            assert.strictEqual(isAlpha('123abc'), false);
        });
    });

    describe('isAlphanumeric', () => {
        it('should return true for a string containing only alphanumeric characters', () => {
            assert.strictEqual(isAlphanumeric('abc123'), true);
        });

        it('should return false for a string containing non-alphanumeric characters', () => {
            assert.strictEqual(isAlphanumeric('abc@123'), false);
        });
    });
});
