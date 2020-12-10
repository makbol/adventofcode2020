const { solution } = require("./day10-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");
const input3 = require("./input3.json");

test("part 2", () => {
    expect(solution(input1)).toBe(8);
    expect(solution(input2)).toBe(19208);
});

console.log(solution(input3));
