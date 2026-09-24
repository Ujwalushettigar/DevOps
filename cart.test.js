const {createOrder} = require('./cart');
describe('createOrder', () => {
    test('should return error when cart is empty', () => {
        const cart = [];
        const result = createOrder(cart);
        expect(result.success).toBe(false);
        expect(result.message).toBe('Cart is empty');
    });
    test('should create order successfully with valid items and no coupon', () => {
        const cart = [
            { name: 'Item 1', price: 10, quantity: 2 },
            { name: 'Item 2', price: 5, quantity: 1 }
        ];  