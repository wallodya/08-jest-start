import { mapArrToStr } from "./mapArrToStr";

describe('map array to string', () => {
    test('is array', () => {
        expect(Array.isArray(mapArrToStr(['1', 2, 3, '4', 4, '0', '']))).toBe(true)
    })
    test('only numbers', () => {
        expect(mapArrToStr([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5'])
    })
    test('only strings', () => {
        expect(mapArrToStr(['1', '2', '3'])).toEqual([])
    })
    test('empty array', () => { 
        expect(mapArrToStr([])).toEqual([])
    })
    test('array with empty strings', () => {
        expect(mapArrToStr(['', '', ''])).toEqual([])
    })
    test('array with numbers', () => {
        expect(mapArrToStr(['1', 2, 3, '4', 4, '0', ''])).toEqual(['2', '3', '4'])
    })
})

it()