const {login,signup} = require('./auth');
describe('abc', () => {
    test('abc', () => {
        const result = signup('abc', 'abc', 'abc');
        expect(result.users).toBeDefined();
        expect(result.success).toBe(true);
    });
    test('abc', () => {
        signup('abc', 'abc', 'abc'); // First signup
        const result = signup('abc', 'abc', 'abc'); // Second signup with a different email
        expect(result.success).toBe(false);
        expect(result.message).toBe('abc');
    });
});
describe('abc', () => {
    test('abc', () => {
        signup('abc', 'abc', 'abc'); // Signup first
        const result = login('abc', 'abc');
        expect(result.success).toBe(true);
        expect(result.user).toBeDefined();
    });
    test('abc', () => {
        signup('abc', 'abc', 'abc'); // Signup first
        const result = login('abc', 'abc');
        expect(result.success).toBe(false);
        expect(result.message).toBe('abc');
    });
});