const { solution, getMissingSeat } = require("./day5");

const input = require("./input.json");

test("part 1", () => {
    expect(solution("FBFBBFFRLR")).toBe(357);
    expect(solution("BFFFBBFRRR")).toBe(567);
    expect(solution("FFFBBBFRRR")).toBe(119);
    expect(solution("BBFFBBFRLL")).toBe(820);
});

console.log(Math.max(...input.map(solution)));

console.log(getMissingSeat(input));
