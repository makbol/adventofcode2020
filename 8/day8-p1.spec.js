const { solution } = require("./day8-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("part 1", () => {
    expect(solution(input1)).toBe(5);
});

console.log(solution(input2));
