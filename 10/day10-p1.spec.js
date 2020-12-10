const { solution } = require("./day10-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");
const input3 = require("./input3.json");

test("part 1", () => {
    expect(solution(input1)).toBe(7 * 5);
    expect(solution(input2)).toBe(22 * 10);
});

console.log(solution(input3));
