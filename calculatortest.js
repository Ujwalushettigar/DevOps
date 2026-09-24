const { add,sub,mul,div } = require("./calculator");
describe("Add feature of a calculator", () => {
    test("Adding two positive numbers", () => {
        expect(add(2, 3)).toBe(10);
        //expect().toEqual(5); 
        //expect().toBeTruthy(); 
        //expect().toBeFalsy(); 
        //expect().toBeDefined();
        //expect().toBeUndefined();
    });
    test("Adding two negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });
});
describe("Sub feature of a calculator", () => {
    test("Subtracting two positive numbers", () => {
        expect(sub(5, 3)).toBe(2);
    });
    test("Subtracting two negative numbers", () => {
        expect(sub(-5, -3)).toBe(-2);
    });
});
describe("Mul feature of a calculator", () => {
    test("Multiplying two positive numbers", () => {
        expect(mul(2, 3)).toBe(6);
    });
    test("Multiplying two negative numbers", () => {
        expect(mul(-2, -3)).toBe(6);
    });
});
describe("Div feature of a calculator", () => {
    test("Dividing two positive numbers", () => {
        expect(div(6, 3)).toBe(2);
    });
    test("Dividing by zero", () => {
        expect(() => div(6, 0)).toThrow("Division by zero is not allowed.");
    });
});
