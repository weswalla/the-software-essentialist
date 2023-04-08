import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string for values between 1 and 100", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it("returns a string version of the numbers 1, 2, 4, 6, non mulitples of 5 or 3", () => {
        const nonMultiples = [1, 2, 4, 6];
        nonMultiples.map((nonMultiple) => fizzbuzz(nonMultiple)).forEach((nonMultipleString, index) => expect(nonMultipleString).toEqual(nonMultiples[index].toString()));
    })
});
