const { solution } = require("./day9-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("part 2", () => {
    expect(solution(input1, 127)).toBe(62);
});

console.log(solution(input2, 257342611));
