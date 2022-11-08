import validateValue from "./validateValue";

describe('validateValue', () => {
    test('less than valid', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('more than valid', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('edge case 1', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('edge case 2', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('valid', () => {
        expect(validateValue(50)).toBe(true)
    })
})