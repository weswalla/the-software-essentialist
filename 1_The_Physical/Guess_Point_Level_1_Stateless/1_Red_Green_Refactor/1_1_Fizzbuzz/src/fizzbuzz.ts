export const fizzbuzz = (n: number) => {
    if (n < 1) throw "number is below 1";
    if (n > 100) throw "number is above 100";
    if (n % 3 === 0) return "Fizz";
    return n.toString();
};