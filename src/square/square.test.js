import { square } from './square'

describe('square dn', () => {
    test('positive integer', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).not.toBeUndefined
        expect(square(20)).toBe(400)
    })
    test('other', () => {
        expect(square(-2)).toBe(4)
        expect(square(2)).not.toBeUndefined
    })
    test('spy', () => {
        const spyMathPow = jest.spyOn(Math, "pow")
        square(4)
        expect(spyMathPow).toBeCalledWith(4, 2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('not spy', () => {
        const spyMathPow = jest.spyOn(Math, "pow")
        square(1)
        expect(spyMathPow).not.toBeCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})