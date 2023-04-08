import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string for 1, a value between 1 and 100", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it("returns a string version of the numbers 1, 2, 4, 7, non mulitples of 5 or 3", () => {
        const nonMultiples = [1, 2, 4, 7];
        nonMultiples.map((nonMultiple) => fizzbuzz(nonMultiple)).forEach((nonMultipleString, index) => expect(nonMultipleString).toEqual(nonMultiples[index].toString()));
    })

    it("throws an error when input is below 1", () => {
        expect(() => fizzbuzz(0)).toThrow()
    })

    it("throws an error when input is above 100", () => {
        expect(() => fizzbuzz(101)).toThrow()
    })

    it("returns 'Fizz' for 3, 6, 9, 12, multiples of 3", () => {
        [3, 6, 9, 12].map((multiple) => fizzbuzz(multiple)).forEach((result) => expect(result).toEqual("Fizz"));
    })

    it("returns 'Buzz' for 5, 10, 20, 25, multiples of 5", () => {
        [5, 10, 20, 25].map((multiple) => fizzbuzz(multiple)).forEach((result) => expect(result).toEqual("Buzz"));
    })

    it("returns 'FizzBuzz' for 15, 30, 45, 60, multiples of 3 & 5", () => {
        [15, 30, 45, 60].map((commonMultiple) => fizzbuzz(commonMultiple)).forEach((result) => expect(result).toEqual("FizzBuzz"));
    })
});
