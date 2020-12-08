const solution = require("./day7-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");
const input3 = require("./input3.json");

test("part 2", () => {
    expect(solution(input1, "shiny gold bag")).toBe(32);
    expect(solution(input3, "shiny gold bag")).toBe(126);
});

console.log(solution(input2, "shiny gold bag"));
