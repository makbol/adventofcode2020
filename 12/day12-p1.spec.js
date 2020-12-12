const { solution, arrayCycle, rotate } = require("./day12-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("arrayCycle", () => {
    const cycle = arrayCycle([1, 2, 3, 4], 0);
    expect(cycle.next().value).toBe(0);
    expect(cycle.next().value).toBe(1);
    expect(cycle.next().value).toBe(2);
    expect(cycle.next().value).toBe(3);
    expect(cycle.next().value).toBe(0);
    expect(cycle.next().value).toBe(1);
});

test("rotate", () => {
    expect(rotate("R", "S", 90)).toBe("W");
    expect(rotate("R", "S", 180)).toBe("N");
    expect(rotate("L", "N", 180)).toBe("S");
    expect(rotate("L", "N", 270)).toBe("E");
});

test("part 1", () => {
    expect(solution(input1)).toBe(25);
});

console.log(solution(input2));
