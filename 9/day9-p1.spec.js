const { solution } = require("./day9-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("part 1", () => {
    expect(solution(input1, 5)).toBe(127);
});

console.log(solution(input2, 25));
