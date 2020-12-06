const solution = require("./day1-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

test("input 1", () => {
    const result = solution(input1);
    expect(sum(result.numbers)).toBe(2020);
});

test("input 2", () => {
    const result = solution(input2);
    expect(sum(result.numbers)).toBe(2020);
});
