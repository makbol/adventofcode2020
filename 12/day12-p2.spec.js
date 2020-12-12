const { solution, Waypoint } = require("./day12-p2");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("Waypoint/move", () => {
    const w = new Waypoint();
    let result;

    result = w.forward(10);
    expect(result.N).toBe(10);
    expect(result.E).toBe(100);
    expect(result.S).toBe(0);
    expect(result.W).toBe(0);

    w.moveWest(15);
    result = w.forward(10);
    expect(result.N).toBe(10);
    expect(result.E).toBe(0);
    expect(result.S).toBe(0);
    expect(result.W).toBe(50);
});

test("Waypoint/forward", () => {
    const w = new Waypoint();

    w.moveNorth(5);
    expect(w.position.N).toBe(6);
    expect(w.position.S).toBe(0);

    w.moveSouth(16);
    expect(w.position.S).toBe(10);
    expect(w.position.N).toBe(0);

    w.moveWest(15)
    expect(w.position.W).toBe(5);
    expect(w.position.E).toBe(0);

    w.moveEast(20);
    expect(w.position.E).toBe(15);
    expect(w.position.W).toBe(0);

    w.moveWest(5);
    expect(w.position.E).toBe(10);
    expect(w.position.W).toBe(0);
});


test("part 2", () => {
    expect(solution(input1)).toBe(286);
});

console.log(solution(input2));
