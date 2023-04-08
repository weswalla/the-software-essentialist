import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("returns a string for values between 1 and 100", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });
});
