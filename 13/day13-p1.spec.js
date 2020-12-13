const { solution, getClosestBus } = require("./day13-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("getClosest", () => {
    const timestamp = 939;
    expect(getClosestBus(timestamp, 7)).toBe(945);
    expect(getClosestBus(timestamp, 13)).toBe(949);
    expect(getClosestBus(timestamp, 59)).toBe(944);
});

test("part 1", () => {
    expect(solution(input1)).toBe(295);
});

console.log(solution(input2));
