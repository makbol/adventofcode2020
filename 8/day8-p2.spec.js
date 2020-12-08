const { solution } = require("./day8-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("part 2", () => {
    expect(solution(input1)).toBe(8);
});

console.log(solution(input2));
